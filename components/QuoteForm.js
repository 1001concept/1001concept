'use client';

import { useEffect, useRef, useState } from 'react';
import { Arrow } from '@/components/ui';

const TOTAL = 5;

function Options({ name, options, value, onChange }) {
  return (
    <div className="opts">
      {options.map((opt) => (
        <label key={opt} className="opt">
          <input type="radio" name={name} value={opt} checked={value === opt} onChange={() => onChange(opt)} />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
}

// Form báo giá nhiều bước. Không gửi dữ liệu lên máy chủ:
// nội dung được soạn sẵn để khách tự gửi qua Zalo, email hoặc gọi điện.
export default function QuoteForm({ t, contact }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ type: '', scope: '', area: '', budget: '', name: '', city: '', note: '' });
  const [error, setError] = useState(false);
  const [status, setStatus] = useState('');
  const headingRef = useRef(null);
  const mounted = useRef(false);

  const set = (key) => (value) => {
    setData((d) => ({ ...d, [key]: value }));
    setError(false);
  };

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    headingRef.current?.focus();
  }, [step]);

  const valid = () => {
    if (step === 1) return Boolean(data.type);
    if (step === 2) return Boolean(data.scope);
    if (step === 3) return Boolean(data.area && data.budget);
    return true;
  };

  const next = () => {
    if (!valid()) {
      setError(true);
      return;
    }
    setError(false);
    setStep((s) => Math.min(TOTAL, s + 1));
  };
  const prev = () => {
    setError(false);
    setStatus('');
    setStep((s) => Math.max(1, s - 1));
  };

  const message = [
    t.msgIntro,
    `• ${t.fType}: ${data.type}`,
    `• ${t.fScope}: ${data.scope}`,
    `• ${t.fArea}: ${data.area}`,
    `• ${t.fBudget}: ${data.budget}`,
    data.city && `• ${t.fCity}: ${data.city}`,
    data.name && `• ${t.fName}: ${data.name}`,
    data.note && `• ${t.fNote}: ${data.note}`,
  ]
    .filter(Boolean)
    .join('\n');

  const sendZalo = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setStatus(t.copied);
    } catch {
      setStatus(t.copyFail);
      return;
    }
    window.open(`https://zalo.me/${contact.zalo}`, '_blank', 'noopener,noreferrer');
  };

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(t.mailSubject)}&body=${encodeURIComponent(message)}`;

  return (
    <form
      className="qf"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (step < TOTAL) next();
      }}
    >
      <div className="qf__top">
        <span>
          {t.step} <b>{String(step).padStart(2, '0')}</b> {t.of} {String(TOTAL).padStart(2, '0')}
        </span>
      </div>
      <div className="qf__bar" role="progressbar" aria-valuemin={1} aria-valuemax={TOTAL} aria-valuenow={step} aria-label={`${t.step} ${step} ${t.of} ${TOTAL}`}>
        <i style={{ transform: `scaleX(${step / TOTAL})` }} />
      </div>

      {step === 1 && (
        <fieldset className="qf__step" key="s1">
          <legend ref={headingRef} tabIndex={-1}>
            {t.q1}
          </legend>
          <Options name="type" options={t.types} value={data.type} onChange={set('type')} />
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="qf__step" key="s2">
          <legend ref={headingRef} tabIndex={-1}>
            {t.q2}
          </legend>
          <Options name="scope" options={t.scopes} value={data.scope} onChange={set('scope')} />
        </fieldset>
      )}

      {step === 3 && (
        <div className="qf__step" key="s3">
          <h2 className="qf__q" ref={headingRef} tabIndex={-1}>
            {t.q3}
          </h2>
          <fieldset>
            <legend className="qf__sub">
              {t.areaLabel}
            </legend>
            <Options name="area" options={t.areas} value={data.area} onChange={set('area')} />
          </fieldset>
          <fieldset>
            <legend className="qf__sub">
              {t.budgetLabel}
            </legend>
            <Options name="budget" options={t.budgets} value={data.budget} onChange={set('budget')} />
          </fieldset>
        </div>
      )}

      {step === 4 && (
        <div className="qf__step" key="s4">
          <h2 className="qf__q" ref={headingRef} tabIndex={-1}>
            {t.q4}
          </h2>
          <div className="fields">
            <div className="field">
              <label htmlFor="qf-name">{t.nameLabel}</label>
              <input id="qf-name" type="text" autoComplete="name" placeholder={t.namePlaceholder} value={data.name} onChange={(e) => set('name')(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="qf-city">{t.cityLabel}</label>
              <input id="qf-city" type="text" autoComplete="address-level2" placeholder={t.cityPlaceholder} value={data.city} onChange={(e) => set('city')(e.target.value)} />
            </div>
            <div className="field field--wide">
              <label htmlFor="qf-note">{t.noteLabel}</label>
              <textarea id="qf-note" aria-describedby="qf-note-help" value={data.note} onChange={(e) => set('note')(e.target.value)} />
              <small id="qf-note-help">{t.noteHelp}</small>
            </div>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="qf__step" key="s5">
          <h2 className="qf__q" ref={headingRef} tabIndex={-1}>
            {t.q5}
          </h2>
          <pre className="qf__summary">{message}</pre>
          <p className="qf__help">{t.reviewHelp}</p>
          <div className="qf__send">
            <button type="button" className="btn btn--solid" onClick={sendZalo}>
              {t.sendZalo}
              <Arrow />
            </button>
            <a className="btn" href={mailto}>
              {t.sendMail}
            </a>
            <a className="btn" href={`tel:${contact.phoneHref}`}>
              {t.callNow}
            </a>
          </div>
          <p className="qf__help">{t.sendZaloHelp}</p>
          <p className="qf__status" role="status">
            {status}
          </p>
        </div>
      )}

      <p className="qf__error" role="alert">
        {error ? t.required : ''}
      </p>

      <div className="qf__nav">
        {step > 1 ? (
          <button type="button" className="btn btn--sm" onClick={prev}>
            {t.prev}
          </button>
        ) : (
          <span />
        )}
        {step < TOTAL ? (
          <button type="submit" className="btn btn--solid">
            {t.next}
            <Arrow />
          </button>
        ) : null}
      </div>
    </form>
  );
}
