// ─────────────────────────────────────────────────────────────
// DỰ ÁN
//
// Mỗi công trình là một mục trong mảng `projects` bên dưới. Trang chi tiết
// luôn dựng theo cùng một bố cục, theo thứ tự:
//
//   1. Mở đầu      — tên, câu dẫn (tagline), đoạn giới thiệu (intro) + ảnh `cover`
//   2. Ảnh rộng    — ảnh `wide` tràn ngang màn hình
//   3. Tổng quan   — câu tuyên ngôn (statement), cột ảnh `gallery`,
//                    bảng thông tin (thời gian, địa điểm, diện tích, hạng mục)
//   4. Các chương  — `chapters`: mỗi chương là một khu vực / không gian của công trình,
//                    gồm tiêu đề, tên khu vực (zone), đoạn mô tả và ảnh.
//                    Bố cục chương tự luân phiên 3 kiểu: khối nền màu → hai ảnh đôi → ảnh trượt.
//                    Ảnh thứ 3 trở đi của một chương sẽ thành dải ảnh trượt bên dưới.
//   5. Dự án trước / sau và các dự án khác
//
// Ảnh: ghi tên file (không đuôi) đã có trong assets/originals sau khi chạy `npm run images`,
// hoặc một khóa trong content/images.js.
// category: 'interior' (nội thất)
// Trường nào không có thì bỏ trống ('' hoặc []), website sẽ tự ẩn phần đó.
//
// Thêm công trình mới: chép nguyên một mục { ... } bên dưới, đổi `slug` và nội dung.
// Các trường `client` (chủ đầu tư) và `type` (loại hình) là tùy chọn.
// ─────────────────────────────────────────────────────────────
export const projects = [
  {
    slug: 'enghouse',
    category: 'interior',
    year: '',
    area: '220 m²',
    cover: 'enghouse-living',
    wide: 'enghouse-kitchen',
    gallery: ['enghouse-working', 'enghouse-cabinet'],
    vi: {
      title: 'EngHouse',
      tagline: 'Sự yên tĩnh của không gian',
      location: 'Diamond Island',
      client: 'Ms.E',
      type: 'Căn hộ',
      scope: [],
      intro: [
        'Gia chủ là người ít nói, trầm tính và đã đi qua nhiều trải nghiệm. Với một người như vậy, ngôi nhà không cần gây ấn tượng ngay từ cái nhìn đầu tiên. Đội ngũ 1001Concept, dưới sự chủ trì của KTS Nguyễn Trung Hiếu, bắt đầu bằng việc lắng nghe: những điều được nói ra không nhiều, nên mỗi điều đều có trọng lượng.',
        'Kết quả là một không gian 220 m² tiết chế: gỗ sẫm màu, đá màu be, kim loại đen và ánh sáng ấm chạy dọc theo trần và mép tủ. Ánh sáng đổi theo từng giờ, chất liệu rõ hơn theo từng năm tháng.',
      ],
      statement: 'EngHouse không lên tiếng. Ngôi nhà để người ở cảm nhận dần dần.',
    },
    en: {
      title: 'EngHouse',
      tagline: 'The quiet of space',
      location: 'Diamond Island',
      client: 'Ms.E',
      type: 'Apartment',
      scope: [],
      intro: [
        'The owner is a person of few words, calm, and has lived through many experiences. For someone like that, a home does not need to impress at first sight. The 1001Concept team, led by architect Nguyễn Trung Hiếu, began by listening: not much was said, so every word carried weight.',
        'The result is a restrained 220 m² space: dark timber, beige stone, black metal and warm light running along the ceiling and the edges of the cabinetry. Light shifts with every hour; materials grow clearer with every year.',
      ],
      statement: 'EngHouse does not raise its voice. The home lets its occupants take it in gradually.',
    },
    chapters: [
      {
        images: ['enghouse-kitchen-dining'],
        vi: {
          title: 'Bếp & Phòng ăn',
          zone: '',
          text: [
            'Bếp và phòng ăn mở chung một không gian, quanh một chiếc bàn tròn.',
            'Bàn tròn không có đầu bàn. Ai ngồi xuống cũng ở cùng một khoảng cách với người đối diện, và câu chuyện cứ thế đi quanh, không cần ai dẫn dắt.',
            'Buổi tối, khi đèn trần đã tắt, chỉ còn dải sáng ấm dưới kệ kính và trên mặt đá sau bếp. Tiếng nước chảy, tiếng dao thớt, mùi của bữa cơm sắp xong.',
            'Với một gia chủ ít lời, đây là nơi ngôi nhà nói thay: mời người ta ngồi lại lâu hơn một chút.',
          ],
        },
        en: {
          title: 'Kitchen & Dining',
          zone: '',
          text: [
            'Kitchen and dining open into a single space, gathered around a round table.',
            'A round table has no head. Whoever sits down is the same distance from the person opposite, and the conversation simply travels around, with no one needing to lead it.',
            'In the evening, once the ceiling lights are off, only the warm glow under the glass shelves and across the stone behind the counter remains. Running water, a knife on the board, the smell of a meal almost ready.',
            'For an owner of few words, this is where the house speaks instead: an invitation to stay a little longer.',
          ],
        },
      },
      {
        images: ['enghouse-lounge', 'enghouse-wine-room'],
        vi: {
          title: 'Phòng rượu',
          zone: '',
          text: [
            'Ở cuối tầm nhìn là phòng rượu, ẩn sau những cánh lam gỗ có thể khép lại hoặc mở ra.',
            'Khi cánh lam khép, căn phòng lùi vào trong, chỉ để lọt ra vài vệt sáng ấm qua khe gỗ. Người đi ngang biết có một điều gì ở đó, nhưng không ai bị buộc phải bước vào.',
            'Khi cánh lam mở, hai chiếc ghế quay vào nhau bên khối đá thấp. Không có chỗ cho đám đông. Căn phòng chỉ vừa cho một cuộc trò chuyện, hoặc cho một người ngồi một mình.',
            'Có những chai rượu được giữ nhiều năm chỉ để chờ đúng một buổi tối. Phòng rượu của EngHouse cũng vậy: không vội, và không dành cho tất cả.',
          ],
        },
        en: {
          title: 'Wine room',
          zone: '',
          text: [
            'At the end of the view is the wine room, hidden behind timber louvres that can be closed or opened.',
            'With the louvres closed, the room withdraws, letting only a few bands of warm light slip through the timber. Anyone passing knows something is there, but no one is obliged to step in.',
            'With the louvres open, two armchairs face each other beside a low block of stone. There is no room for a crowd. The space is just enough for one conversation, or for one person sitting alone.',
            'Some bottles are kept for years to wait for a single evening. The wine room at EngHouse is the same: unhurried, and not meant for everyone.',
          ],
        },
      },
    ],
  },
  {
    slug: 'timber-house',
    category: 'interior',
    year: '2024',
    area: '386 m²',
    cover: 'timber-house-011',
    wide: 'timber-house-017',
    gallery: ['timber-house-001', 'timber-house-015'],
    vi: {
      title: 'Timber House',
      tagline: 'Không cần quá nhiều màu sắc để tạo nên cảm xúc.',
      location: 'TP. Hồ Chí Minh',
      client: '',
      type: 'Căn hộ',
      scope: ['Thiết kế'],
      intro: [
        'Sự cộng hưởng của gỗ tối màu, ánh sáng ấm và những đường nét tối giản đã đủ mang đến một góc thư giãn đầy chiều sâu. Một khoảng lặng để đọc, suy ngẫm và tận hưởng nhịp sống chậm giữa không gian sống.',
        'Timber House là căn hộ 386 m² tại TP. Hồ Chí Minh, được 1001Concept thiết kế nội thất năm 2024. Gỗ là chất liệu chủ đạo, xuất hiện trên trần, trên tường và trong đồ nội thất, đi cùng đá tối màu và những mảng kính lớn mở ra khoảng xanh bên ngoài.',
      ],
      statement: 'Gỗ tối màu làm nền, ánh sáng ấm làm điểm nhấn.',
    },
    en: {
      title: 'Timber House',
      tagline: 'It does not take many colours to create emotion.',
      location: 'Ho Chi Minh City',
      client: '',
      type: 'Apartment',
      scope: ['Design'],
      intro: [
        'The resonance of dark timber, warm light and minimal lines is enough to create a corner for rest with real depth. A quiet interval for reading, reflecting and enjoying a slower rhythm within the home.',
        'Timber House is a 386 m² apartment in Ho Chi Minh City, with interiors designed by 1001Concept in 2024. Timber is the leading material, on the ceiling, the walls and the furniture, paired with dark stone and large glazed openings onto the greenery outside.',
      ],
      statement: 'Dark timber as the ground, warm light as the accent.',
    },
    chapters: [
      {
        images: [
          'timber-house-014',
          'timber-house-004',
          'timber-house-019',
          'timber-house-013',
          'timber-house-006',
          'timber-house-007',
          'timber-house-028',
        ],
        vi: {
          title: 'Phòng khách & Bếp',
          zone: '',
          text: [
            'Trần gỗ chạy suốt chiều dài phòng khách, dẫn tầm mắt ra khung kính lớn. Bộ sofa sáng màu đặt trên tấm thảm tròn làm trung tâm; phía sau là quầy bar bằng đá xuyên sáng và khu bếp ốp đá tối màu.',
            'Ở một góc phòng, chiếc ghế thư giãn cạnh kệ sách tạo thành góc đọc riêng.',
          ],
        },
        en: {
          title: 'Living room & Kitchen',
          zone: '',
          text: [
            'A timber ceiling runs the length of the living room and leads the eye to the large glazing. Light-toned sofas sit on a round rug at the centre; behind them are a bar in backlit stone and a kitchen clad in dark stone.',
            'In one corner, a lounge chair beside the bookshelves makes a reading nook of its own.',
          ],
        },
      },
      {
        images: [
          'timber-house-034',
          'timber-house-041',
          'timber-house-031',
          'timber-house-038',
          'timber-house-044',
          'timber-house-047',
          'timber-house-035',
          'timber-house-045',
        ],
        vi: {
          title: 'Phòng ngủ master',
          zone: '',
          text: [
            'Phòng ngủ mở hai mặt kính với rèm sáo, lọc ánh sáng thành những dải mềm. Mảng tường đầu giường bằng gỗ tối màu tương phản với giường và sofa sáng màu; bàn làm việc nhỏ và khu ngồi nghỉ đặt gần cửa sổ.',
          ],
        },
        en: {
          title: 'Master bedroom',
          zone: '',
          text: [
            'The bedroom opens on two glazed sides behind slatted blinds that filter daylight into soft bands. A dark timber headboard wall contrasts with the pale bed and sofa; a small desk and a seating area sit near the windows.',
          ],
        },
      },
      {
        images: ['timber-house-055', 'timber-house-058', 'timber-house-061', 'timber-house-057', 'timber-house-056'],
        vi: {
          title: 'Phòng tắm master',
          zone: '',
          text: [
            'Bồn tắm màu hổ phách đặt sát khung kính là điểm nhấn của phòng tắm. Đá tối màu, lavabo đôi và ánh sáng hắt gián tiếp giữ cho không gian trầm và kín đáo.',
          ],
        },
        en: {
          title: 'Master bathroom',
          zone: '',
          text: [
            'An amber-toned bathtub set against the glazing is the focal point of the bathroom. Dark stone, twin basins and indirect light keep the room deep and discreet.',
          ],
        },
      },
      {
        images: [
          'timber-house-027',
          'timber-house-062',
          'timber-house-063',
          'timber-house-023',
          'timber-house-026',
          'timber-house-022',
        ],
        vi: {
          title: 'Phòng làm việc',
          zone: '',
          text: [
            'Phòng làm việc dùng tông xanh rêu trầm, với bàn cong, tủ thấp mặt đá và bức tranh trừu tượng làm nền.',
          ],
        },
        en: {
          title: 'Work space',
          zone: '',
          text: [
            'The work space is finished in a deep moss green, with a curved desk, a stone-topped sideboard and an abstract painting as its backdrop.',
          ],
        },
      },
    ],
  },
  {
    slug: 'mori-apartment',
    category: 'interior',
    year: '2024',
    area: '85 m²',
    cover: 'mori-apartment-k6',
    wide: 'mori-apartment-k19',
    gallery: ['mori-apartment-k12', 'mori-apartment-k10'],
    vi: {
      title: 'Mori Apartment',
      tagline: 'Không cần quá nhiều màu sắc để tạo nên cảm xúc.',
      location: 'TP. Hồ Chí Minh',
      client: '',
      type: 'Căn hộ',
      scope: ['Thiết kế'],
      intro: [
        'Mori Apartment là căn hộ khoảng 85 m² tại TP. Hồ Chí Minh, nơi ở của hai vợ chồng và một bạn nhỏ. 1001Concept thiết kế nội thất năm 2024, lấy nét mộc mạc làm tinh thần chủ đạo.',
        'Gỗ sáng màu, đá tự nhiên, mây đan và vải thô gần như cùng một tông be. Phòng khách, bàn ăn và bếp nằm chung trong một không gian mở, nên căn hộ nhỏ vẫn thoáng và liền mạch.',
      ],
      statement: 'Một tông màu, nhiều chất liệu: nét mộc mạc đến từ bề mặt.',
    },
    en: {
      title: 'Mori Apartment',
      tagline: 'It does not take many colours to create emotion.',
      location: 'Ho Chi Minh City',
      client: '',
      type: 'Apartment',
      scope: ['Design'],
      intro: [
        'Mori Apartment is a home of around 85 m² in Ho Chi Minh City for a couple and their young child. 1001Concept designed the interiors in 2024, with a plain, rustic character as the guiding idea.',
        'Pale timber, natural stone, woven cane and coarse fabric sit in almost the same beige tone. The living room, dining table and kitchen share one open space, so a small apartment still feels airy and continuous.',
      ],
      statement: 'One tone, many materials: the rustic character comes from the surfaces.',
    },
    chapters: [
      {
        images: ['mori-apartment-k25'],
        vi: {
          title: 'Phòng khách',
          zone: '',
          text: [
            'Bộ sofa bo tròn đặt giữa phòng, quay về mảng tường trắng có bức tranh phong cảnh và bệ đá chạy dài bên dưới. Rèm hai lớp lọc ánh sáng ban ngày thành một nền sáng dịu cho cả căn phòng.',
          ],
        },
        en: {
          title: 'Living room',
          zone: '',
          text: [
            'Rounded sofas sit in the middle of the room, facing a white wall with a landscape painting and a long stone ledge beneath it. Two layers of curtain filter the daylight into a soft, even glow.',
          ],
        },
      },
      {
        images: ['mori-apartment-k23', 'mori-apartment-k20'],
        vi: {
          title: 'Bếp & Phòng ăn',
          zone: '',
          text: [
            'Bàn ăn bầu dục nằm dưới chiếc đèn thả đan tròn, giữa bếp và phòng khách. Dãy tủ bếp gỗ sáng màu đi cùng gạch ốp xám và mặt đá tối; cạnh đó là tủ rượu khung kim loại đen có đèn hắt.',
          ],
        },
        en: {
          title: 'Kitchen & Dining',
          zone: '',
          text: [
            'An oval dining table sits beneath a round woven pendant, between the kitchen and the living room. Pale timber cabinets are paired with grey tiles and a dark stone worktop; beside them is a wine cabinet in black metal with concealed lighting.',
          ],
        },
      },
      {
        images: ['mori-apartment-k7', 'mori-apartment-k8'],
        vi: {
          title: 'Lối vào',
          zone: '',
          text: [
            'Lối vào ốp gỗ tối màu hơn, có băng ghế thấp và móc treo ngay cạnh cửa. Từ đây, tầm mắt đi thẳng ra phòng khách và khung cửa sáng ở cuối nhà.',
          ],
        },
        en: {
          title: 'Entrance',
          zone: '',
          text: [
            'The entrance is lined in a darker timber, with a low bench and hooks beside the door. From here the eye runs straight to the living room and the bright window at the far end.',
          ],
        },
      },
    ],
  },
  {
    slug: 'jean-apartment',
    category: 'interior',
    year: '2025',
    area: '240 m²',
    cover: 'jean-apartment-living-12',
    wide: 'jean-apartment-living-03',
    gallery: ['jean-apartment-living-01r', 'jean-apartment-living-06', 'jean-apartment-living-11'],
    vi: {
      title: 'Jean Apartment',
      tagline: 'Phong cách hiện đại, chú trọng hình khối trong một tổng thể.',
      location: 'TP. Hồ Chí Minh',
      client: '',
      type: 'Căn hộ',
      scope: ['Thiết kế'],
      intro: [
        'Jean Apartment là căn hộ 240 m² tại TP. Hồ Chí Minh, được 1001Concept thiết kế nội thất năm 2025 theo phong cách hiện đại. Thiết kế chú trọng vào hình khối: mỗi mảng tường, khối tủ và quầy bếp đều được nhìn như một phần của tổng thể.',
        'Bảng màu xoay quanh đen, xám và trắng, với đá vân lớn, kính và kim loại tối màu. Vài điểm ấm như da nâu, ghế mây và ánh đèn hắt giữ cho không gian không bị lạnh.',
      ],
      statement: 'Những khối đậm nhạt đặt cạnh nhau, tạo nên một tổng thể liền mạch.',
    },
    en: {
      title: 'Jean Apartment',
      tagline: 'A modern style, with form considered as part of a whole.',
      location: 'Ho Chi Minh City',
      client: '',
      type: 'Apartment',
      scope: ['Design'],
      intro: [
        'Jean Apartment is a 240 m² home in Ho Chi Minh City, with interiors designed by 1001Concept in 2025 in a modern style. The design concentrates on form: every wall plane, cabinet volume and kitchen counter is treated as part of the whole.',
        'The palette stays with black, grey and white, in boldly veined stone, glass and dark metal. A few warm notes, such as brown leather, cane chairs and concealed lighting, keep the space from feeling cold.',
      ],
      statement: 'Dark and light volumes set side by side, forming one continuous whole.',
    },
    chapters: [
      {
        images: ['jean-apartment-living-10', 'jean-apartment-living-02', 'jean-apartment-living-13'],
        vi: {
          title: 'Phòng khách',
          zone: '',
          text: [
            'Bộ sofa dài tựa vào mảng tường phù điêu tối màu, đối diện vách tivi ốp đá có ngọn lửa trang trí chạy dài bên dưới. Giữa phòng là bàn trà đá đen và hai chiếc đôn nâu; cạnh cửa kính là đôi ghế thư giãn.',
            'Ở góc phòng, cây đàn piano đứng giữa hai tủ rượu kính.',
          ],
        },
        en: {
          title: 'Living room',
          zone: '',
          text: [
            'A long sofa rests against a dark relief wall, facing a stone-clad television wall with a line of decorative flame beneath it. At the centre are a black stone coffee table and two brown ottomans; a pair of lounge chairs sits by the glazing.',
            'In the corner, a piano stands between two glass wine cabinets.',
          ],
        },
      },
      {
        images: ['jean-apartment-living-05', 'jean-apartment-living-04'],
        vi: {
          title: 'Bếp & Phòng ăn',
          zone: '',
          text: [
            'Quầy đảo ốp đá trắng vân đen nổi bật trên nền tủ bếp và tường đá tối màu. Bàn ăn dài nối liền với đảo bếp, đi cùng hàng ghế mây khung thép và chiếc đèn thả nhiều chóa phía trên.',
          ],
        },
        en: {
          title: 'Kitchen & Dining',
          zone: '',
          text: [
            'An island in white stone with black veining stands out against the dark cabinets and stone wall. A long dining table joins the island, with a row of cane chairs on steel frames and a multi-shade pendant above.',
          ],
        },
      },
      {
        images: ['jean-apartment-work-08', 'jean-apartment-work-07', 'jean-apartment-work-09'],
        vi: {
          title: 'Phòng làm việc',
          zone: '',
          text: [
            'Phòng làm việc tách khỏi khu sinh hoạt chung bằng vách kính sọc trượt. Kệ sách có đèn hắt chạy kín một mảng tường sau bàn làm việc; bên cửa sổ là chiếc ghế da để ngồi đọc.',
          ],
        },
        en: {
          title: 'Work space',
          zone: '',
          text: [
            'The work space is separated from the shared living area by sliding reeded-glass panels. Backlit bookshelves fill the wall behind the desk; by the window is a leather chair for reading.',
          ],
        },
      },
      {
        images: [
          'jean-apartment-master-05',
          'jean-apartment-master-01',
          'jean-apartment-master-02',
          'jean-apartment-master-03',
          'jean-apartment-master-09',
          'jean-apartment-master-10',
          'jean-apartment-master-07',
          'jean-apartment-master-08',
          'jean-apartment-master-04',
        ],
        vi: {
          title: 'Phòng ngủ master',
          zone: '',
          text: [
            'Phòng ngủ sáng hơn phần còn lại của căn hộ: tường đầu giường ốp gỗ, rèm voan và rèm sáo lọc nắng từ hai phía.',
            'Phía sau là phòng thay đồ với tủ kính, góc bàn nhỏ bên cửa sổ và phòng tắm ốp đá có lavabo đôi.',
          ],
        },
        en: {
          title: 'Master bedroom',
          zone: '',
          text: [
            'The bedroom is brighter than the rest of the apartment: a timber headboard wall, with sheer curtains and slatted blinds filtering sunlight from two sides.',
            'Behind it are a dressing room with glass-fronted wardrobes, a small desk by the window and a stone-clad bathroom with twin basins.',
          ],
        },
      },
    ],
  },
  {
    slug: 'time-house',
    category: 'interior',
    year: '2024',
    area: '75 m²',
    cover: 'time-house-02',
    wide: 'time-house-10',
    gallery: ['time-house-11', 'time-house-09'],
    vi: {
      title: 'Time House',
      tagline: 'Một căn hộ mang nhịp chậm của những thập niên trước.',
      location: 'TP. Hồ Chí Minh',
      client: '',
      type: 'Căn hộ',
      scope: ['Thiết kế'],
      intro: [
        'Time House là căn hộ 75 m² tại TP. Hồ Chí Minh, được 1001Concept thiết kế nội thất năm 2024. Không gian mang tinh thần hoài cổ: gỗ nâu sẫm, gạch kính, cửa vòm và những món đồ gợi nhớ thập niên trước như máy đĩa than hay chiếc đèn bàn hình nấm.',
        'Phòng khách và bàn ăn nằm chung một không gian mở. Nắng qua rèm sáo đổ thành từng vệt trên tường và sàn gỗ, làm màu xanh rêu của sofa và họa tiết của ghế nổi lên trên nền be.',
      ],
      statement: 'Đồ vật cũ, cách sống mới: thời gian là chất liệu của ngôi nhà.',
    },
    en: {
      title: 'Time House',
      tagline: 'An apartment with the slower rhythm of earlier decades.',
      location: 'Ho Chi Minh City',
      client: '',
      type: 'Apartment',
      scope: ['Design'],
      intro: [
        'Time House is a 75 m² apartment in Ho Chi Minh City, with interiors designed by 1001Concept in 2024. The space has a nostalgic spirit: dark brown timber, glass blocks, arched openings and objects that recall earlier decades, such as a turntable and a mushroom-shaped table lamp.',
        'The living room and dining table share one open space. Sunlight through slatted blinds falls in bands across the walls and timber floor, lifting the moss green of the sofa and the pattern of the chair against a beige ground.',
      ],
      statement: 'Old objects, a new way of living: time is the material of this home.',
    },
    chapters: [
      {
        images: ['time-house-13', 'time-house-03', 'time-house-06', 'time-house-07', 'time-house-05'],
        vi: {
          title: 'Phòng khách',
          zone: '',
          text: [
            'Bộ sofa nhung xanh rêu đặt trước mảng gạch kính, bên cạnh là đèn cây và kệ trưng bày thấp.',
            'Đối diện là vách tivi bằng gỗ sẫm màu với kệ sách, chiếc ghế thư giãn họa tiết và máy đĩa than đặt trên bàn nhỏ.',
          ],
        },
        en: {
          title: 'Living room',
          zone: '',
          text: [
            'A moss-green velvet sofa sits in front of a glass-block wall, with a floor lamp and a low display shelf beside it.',
            'Opposite is a television wall in dark timber with bookshelves, a patterned lounge chair and a turntable on a small table.',
          ],
        },
      },
      {
        images: ['time-house-12', 'time-house-04', 'time-house-01', 'time-house-08'],
        vi: {
          title: 'Phòng ăn',
          zone: '',
          text: [
            'Bàn tròn mặt đá đi cùng bốn chiếc ghế gỗ đan caro, dưới chùm đèn thả nhiều bóng. Trên tường là bức tranh nhiều màu và ba chiếc đĩa trang trí; chậu cây cao đứng cạnh cửa sổ.',
          ],
        },
        en: {
          title: 'Dining',
          zone: '',
          text: [
            'A round stone-topped table is paired with four timber chairs in checked weave, beneath a pendant with many globes. On the walls are a colourful painting and three decorative plates; a tall plant stands by the window.',
          ],
        },
      },
      {
        images: ['time-house-14', 'time-house-15'],
        vi: {
          title: 'Lối vào & Quầy bar',
          zone: '',
          text: [
            'Lối vào lát gạch caro, một bên là mảng tủ gỗ cao kín trần. Qua khung cửa vòm là bàn ăn và ô cửa sổ; một khung vòm khác mở vào quầy bar nhỏ với hai chiếc ghế cao bọc nhung xanh.',
          ],
        },
        en: {
          title: 'Entrance & Bar',
          zone: '',
          text: [
            'The entrance is paved in checkerboard tiles, with full-height timber cabinets along one side. Through an arched opening are the dining table and the window; another arch opens onto a small bar with two high stools in green velvet.',
          ],
        },
      },
    ],
  },
  {
    slug: 'lam-apartment',
    category: 'interior',
    year: '2024',
    area: '75 m²',
    cover: 'lam-apartment-living-02',
    wide: 'lam-apartment-living-13',
    gallery: ['lam-apartment-living-16', 'lam-apartment-living-14'],
    vi: {
      title: 'Lam Apartment',
      tagline: 'Gỗ sáng màu và một bức tranh rực rỡ giữa nền trung tính.',
      location: 'TP. Hồ Chí Minh',
      client: '',
      type: 'Căn hộ',
      scope: ['Thiết kế'],
      intro: [
        'Lam Apartment là căn hộ 75 m² tại TP. Hồ Chí Minh, được 1001Concept thiết kế nội thất năm 2024. Nền của không gian là gỗ sáng màu trên tường và trần, sàn xám và những mảng tường trắng; trên nền đó là vài điểm nhấn có chủ ý: sofa kẻ sọc, bàn trà đá vân đen trắng và một bức tranh nhiều màu ở khu bàn ăn.',
        'Phòng khách, bàn ăn, bếp và góc làm việc vách kính nối nhau dọc theo chiều dài căn hộ, dưới cùng một dải trần gỗ.',
      ],
      statement: 'Nền trung tính, điểm nhấn có chọn lọc.',
    },
    en: {
      title: 'Lam Apartment',
      tagline: 'Pale timber and one vivid painting on a neutral ground.',
      location: 'Ho Chi Minh City',
      client: '',
      type: 'Apartment',
      scope: ['Design'],
      intro: [
        'Lam Apartment is a 75 m² home in Ho Chi Minh City, with interiors designed by 1001Concept in 2024. The ground of the space is pale timber on the walls and ceiling, a grey floor and white wall planes; on it sit a few deliberate accents: a striped sofa, a coffee table in black-and-white veined stone and a colourful painting by the dining table.',
        'The living room, dining table, kitchen and a glass-walled work corner follow one another along the length of the apartment, beneath a single band of timber ceiling.',
      ],
      statement: 'A neutral ground, with carefully chosen accents.',
    },
    chapters: [
      {
        images: [
          'lam-apartment-living-01',
          'lam-apartment-living-03',
          'lam-apartment-living-12',
          'lam-apartment-living-11',
          'lam-apartment-living-09',
        ],
        vi: {
          title: 'Phòng khách',
          zone: '',
          text: [
            'Sofa kẻ sọc và chiếc ghế thư giãn màu kem quay về vách tivi có lò sưởi trang trí chạy ngang; bàn trà đá vân đen trắng đặt trên thảm sáng màu.',
            'Cạnh phòng khách là góc làm việc ngăn bằng vách kính bo cong, có kệ sách hắt sáng.',
          ],
        },
        en: {
          title: 'Living room',
          zone: '',
          text: [
            'A striped sofa and a cream lounge chair face a television wall with a linear decorative fireplace; a coffee table in black-and-white veined stone sits on a pale rug.',
            'Beside the living room is a work corner enclosed by curved glass partitions, with backlit bookshelves.',
          ],
        },
      },
      {
        images: [
          'lam-apartment-living-06',
          'lam-apartment-living-05',
          'lam-apartment-living-07',
          'lam-apartment-living-15',
          'lam-apartment-living-17',
          'lam-apartment-living-08',
          'lam-apartment-living-10',
          'lam-apartment-living-04',
        ],
        vi: {
          title: 'Bếp & Phòng ăn',
          zone: '',
          text: [
            'Bàn ăn tròn nằm dưới chiếc đèn thả uốn cong, bên bức tranh lớn nhiều màu và băng ghế dài.',
            'Bếp chữ U ốp gỗ sáng màu đặt trên bục lát gạch họa tiết, có đảo bếp nhỏ và ô trần tròn hắt sáng phía trên.',
          ],
        },
        en: {
          title: 'Kitchen & Dining',
          zone: '',
          text: [
            'A round dining table sits beneath a curved pendant light, beside a large colourful painting and a long bench.',
            'The U-shaped kitchen in pale timber stands on a platform of patterned tiles, with a small island and a round, softly lit ceiling recess above.',
          ],
        },
      },
      {
        images: [
          'lam-apartment-bed-01',
          'lam-apartment-bed-02',
          'lam-apartment-bed-09',
          'lam-apartment-bed-06',
          'lam-apartment-bed-05',
          'lam-apartment-bed-04',
          'lam-apartment-bed-03',
          'lam-apartment-bed-08',
          'lam-apartment-bed-07',
        ],
        vi: {
          title: 'Phòng ngủ',
          zone: '',
          text: [
            'Phòng ngủ dùng giường bục gỗ thấp, kéo dài thành bậc ngồi và táp đầu giường. Hai mảng đá xám vân lớn đối diện nhau ở đầu giường và vách tivi; rèm sáo trắng lọc nắng thành từng dải trên tường.',
          ],
        },
        en: {
          title: 'Bedroom',
          zone: '',
          text: [
            'The bedroom has a low timber platform bed that extends into a step and a bedside ledge. Two planes of boldly veined grey stone face each other at the headboard and the television wall; white slatted blinds filter the sun into bands across the wall.',
          ],
        },
      },
    ],
  },
  {
    slug: 'long-house',
    category: 'interior',
    year: '2024',
    area: '138 m²',
    cover: 'long-house-living-02',
    wide: 'long-house-living-10',
    gallery: ['long-house-living-09', 'long-house-living-08'],
    vi: {
      title: 'Long House',
      tagline: 'Tông đất ấm, một chiếc sofa xanh và ô sáng tròn trên trần.',
      location: 'TP. Hồ Chí Minh',
      client: '',
      type: 'Căn hộ',
      scope: ['Thiết kế'],
      intro: [
        'Long House là căn hộ 138 m² tại TP. Hồ Chí Minh, được 1001Concept thiết kế nội thất năm 2024. Căn hộ dùng những tông đất ấm: tường màu cát, gạch thẻ nâu đỏ, gỗ sẫm màu và sàn lát caro ở lối vào và bếp.',
        'Trên nền đó, chiếc sofa xanh dương, những bức tranh và ô trần tròn hắt sáng trên phòng khách trở thành điểm nhìn chính. Phòng khách, bàn ăn và bếp nằm chung trong một không gian mở.',
      ],
      statement: 'Màu của đất làm nền, một sắc xanh làm điểm nhấn.',
    },
    en: {
      title: 'Long House',
      tagline: 'Warm earth tones, one blue sofa and a round opening of light in the ceiling.',
      location: 'Ho Chi Minh City',
      client: '',
      type: 'Apartment',
      scope: ['Design'],
      intro: [
        'Long House is a 138 m² apartment in Ho Chi Minh City, with interiors designed by 1001Concept in 2024. The apartment works in warm earth tones: sand-coloured walls, red-brown tiles, dark timber and a checkerboard floor at the entrance and kitchen.',
        'Against that ground, a blue sofa, the paintings and a round, softly lit ceiling recess over the living room become the main points of focus. The living room, dining table and kitchen share one open space.',
      ],
      statement: 'Earth colours as the ground, a single blue as the accent.',
    },
    chapters: [
      {
        images: [
          'long-house-living-01',
          'long-house-living-07',
          'long-house-living-13',
          'long-house-living-06',
          'long-house-living-11',
        ],
        vi: {
          title: 'Phòng khách',
          zone: '',
          text: [
            'Sofa xanh dương và hai chiếc ghế bành bọc vải màu kem quây quanh bàn trà tròn, trên tấm thảm có viền uốn lượn.',
            'Phía trên là ô trần tròn hắt sáng; trên tường là bức tranh phong cảnh và kệ gỗ đỏ chạy ngang.',
          ],
        },
        en: {
          title: 'Living room',
          zone: '',
          text: [
            'A blue sofa and two armchairs in cream fabric gather around a round coffee table, on a rug with a wavy border.',
            'Above is a round, softly lit ceiling recess; on the wall are a landscape painting and a long red timber shelf.',
          ],
        },
      },
      {
        images: [
          'long-house-living-03',
          'long-house-living-04',
          'long-house-living-05',
          'long-house-living-15',
          'long-house-living-12',
          'long-house-living-14',
        ],
        vi: {
          title: 'Bếp & Phòng ăn',
          zone: '',
          text: [
            'Bàn ăn gỗ dài đặt trên chân đá vân, dưới chùm đèn nhiều bóng. Phía sau là quầy bar cong và bếp ốp gạch thẻ nâu đỏ, với bức chân dung nền xanh làm điểm nhấn; sàn khu này lát gạch caro.',
          ],
        },
        en: {
          title: 'Kitchen & Dining',
          zone: '',
          text: [
            'A long timber dining table rests on veined stone legs, beneath a pendant with many globes. Behind it are a curved bar counter and a kitchen clad in red-brown tiles, with a portrait on a blue ground as the accent; the floor here is laid in checkerboard tiles.',
          ],
        },
      },
      {
        images: [
          'long-house-bed1-04',
          'long-house-bed1-03',
          'long-house-bed1-02',
          'long-house-bed1-05',
          'long-house-bed1-01',
          'long-house-bed1-07',
          'long-house-bed1-06',
        ],
        vi: {
          title: 'Phòng ngủ 1',
          zone: '',
          text: [
            'Phòng ngủ thứ nhất giữ tông đất của phòng khách: chân tường ốp gạch thẻ nâu đỏ, kệ và bàn làm việc sơn đỏ, giường bọc nệm nâu. Đèn trần đan lớn, băng ghế bên cửa sổ và một chậu cây lá to làm căn phòng mềm lại.',
          ],
        },
        en: {
          title: 'Bedroom 1',
          zone: '',
          text: [
            'The first bedroom keeps the earth tones of the living room: a dado of red-brown tiles, a red-painted shelf and desk, and a bed upholstered in brown. A large woven ceiling light, a window seat and a broad-leaved plant soften the room.',
          ],
        },
      },
      {
        images: [
          'long-house-bed2-06',
          'long-house-bed2-01',
          'long-house-bed2-02',
          'long-house-bed2-03',
          'long-house-bed2-04',
          'long-house-bed2-05',
        ],
        vi: {
          title: 'Phòng ngủ 2',
          zone: '',
          text: [
            'Phòng ngủ thứ hai sáng và nhẹ hơn, với đầu giường bo cong màu kem và tủ áo trắng có mảng caro đỏ. Bàn trang điểm nhỏ gắn vào mảng ốp gỗ cạnh cửa sổ.',
          ],
        },
        en: {
          title: 'Bedroom 2',
          zone: '',
          text: [
            'The second bedroom is lighter and brighter, with a curved cream headboard and white wardrobes with a red checked panel. A small dressing table is fixed to the timber panelling by the window.',
          ],
        },
      },
    ],
  },
];

export const categories = {
  all: { vi: 'Tất cả', en: 'All' },
  interior: { vi: 'Nội thất', en: 'Interiors' },
};

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
