// ─────────────────────────────────────────────────────────────
// DỰ ÁN — DỮ LIỆU MẪU. Thay bằng công trình thật của 1001CONCEPT.
// category: 'interior' (nội thất nhà ở) | 'architecture' (kiến trúc)
// cover / gallery: khóa ảnh trong content/images.js hoặc đường dẫn /images/...
// ─────────────────────────────────────────────────────────────
export const projects = [
  {
    slug: 'lang-villa',
    category: 'architecture',
    year: '2025',
    area: '620 m²',
    cover: 'villaA',
    gallery: ['houseA', 'livingD', 'interiorD', 'houseC'],
    vi: {
      title: 'Lặng Villa',
      location: 'Thảo Điền, TP. Hồ Chí Minh',
      scope: 'Kiến trúc & nội thất',
      summary: 'Một khối nhà nằm ngang, mở trọn về phía mặt nước và khép kín với con phố.',
      body: [
        'Gia chủ muốn một nơi trở về mà tiếng ồn thành phố dừng lại ngay ở cổng. Chúng tôi đặt toàn bộ khối sinh hoạt quay lưng với đường, mở những khoảng kính lớn về phía hồ bơi và khu vườn phía sau.',
        'Mái đua sâu hai mét rưỡi che nắng tây và tạo nên một dải bóng râm chạy dọc mặt đứng. Đá tự nhiên, gỗ óc chó và bê tông mài là ba chất liệu duy nhất, lặp lại từ ngoài vào trong.',
      ],
    },
    en: {
      title: 'Lang Villa',
      location: 'Thao Dien, Ho Chi Minh City',
      scope: 'Architecture & interiors',
      summary: 'A low, horizontal volume that opens fully to the water and closes itself to the street.',
      body: [
        'The owners wanted a place where the noise of the city stops at the gate. We turned the living volume away from the road and opened large glazed spans toward the pool and the rear garden.',
        'A two-and-a-half-metre roof overhang shades the western sun and draws a continuous band of shadow along the facade. Natural stone, walnut and polished concrete are the only three materials, repeated from outside to inside.',
      ],
    },
  },
  {
    slug: 'penthouse-dem',
    category: 'interior',
    year: '2025',
    area: '285 m²',
    cover: 'livingA',
    gallery: ['interiorA', 'kitchen', 'bedroomA', 'bath'],
    vi: {
      title: 'Penthouse Đêm',
      location: 'Quận 2, TP. Hồ Chí Minh',
      scope: 'Thiết kế nội thất',
      summary: 'Căn penthouse được thiết kế cho buổi tối — khi thành phố lên đèn và căn nhà lùi lại.',
      body: [
        'Thay vì cạnh tranh với khung cảnh, nội thất chọn tông trầm và bề mặt mờ để ánh đèn thành phố trở thành bức tranh chính của phòng khách.',
        'Ánh sáng được chia thành bốn lớp điều khiển độc lập. Không có đèn trần chiếu thẳng; mọi nguồn sáng đều hắt gián tiếp từ khe trần, kệ và chân tường.',
      ],
    },
    en: {
      title: 'Night Penthouse',
      location: 'District 2, Ho Chi Minh City',
      scope: 'Interior design',
      summary: 'A penthouse designed for the evening — when the city lights up and the home steps back.',
      body: [
        'Rather than compete with the view, the interior keeps to deep tones and matte surfaces so the city lights become the main picture in the living room.',
        'Lighting is split into four independently controlled layers. There are no direct downlights; every source washes indirectly from ceiling coves, shelving and skirting.',
      ],
    },
  },
  {
    slug: 'nha-ba-khoang-san',
    category: 'architecture',
    year: '2024',
    area: '340 m²',
    cover: 'houseB',
    gallery: ['archA', 'livingB', 'interiorB', 'houseA'],
    vi: {
      title: 'Nhà Ba Khoảng Sân',
      location: 'Đà Nẵng',
      scope: 'Kiến trúc & nội thất',
      summary: 'Ngôi nhà phố năm mét bề ngang, được cắt bởi ba khoảng sân đưa gió và ánh sáng xuống tận tầng trệt.',
      body: [
        'Lô đất dài và hẹp là bài toán quen thuộc của nhà phố Việt Nam. Ba khoảng sân trong chia ngôi nhà thành bốn lớp không gian, mỗi lớp đều có hai mặt thoáng.',
        'Cầu thang thép mảnh và sàn lưới ở tầng trên để ánh sáng lọt qua, khiến giếng trời trở thành căn phòng đẹp nhất của ngôi nhà.',
      ],
    },
    en: {
      title: 'Three Courtyard House',
      location: 'Da Nang',
      scope: 'Architecture & interiors',
      summary: 'A five-metre-wide townhouse cut by three courtyards that bring wind and daylight down to the ground floor.',
      body: [
        'A long, narrow plot is the familiar puzzle of the Vietnamese townhouse. Three inner courtyards divide the house into four layers of space, each with two open faces.',
        'A slender steel stair and grated upper floors let light pass through, turning the lightwell into the most beautiful room in the house.',
      ],
    },
  },
  {
    slug: 'can-ho-tram',
    category: 'interior',
    year: '2024',
    area: '142 m²',
    cover: 'livingC',
    gallery: ['aptA', 'livingE', 'bedroomB', 'aptC'],
    vi: {
      title: 'Căn Hộ Trầm',
      location: 'Ba Đình, Hà Nội',
      scope: 'Thiết kế nội thất',
      summary: 'Căn hộ ba phòng ngủ cho một gia đình ba thế hệ, gọn gàng mà không lạnh lẽo.',
      body: [
        'Toàn bộ hệ tủ được giấu vào tường để trả lại mặt bằng thông thoáng. Gỗ sồi hun khói và vải lanh giữ cho căn hộ ấm áp dù bảng màu rất tiết chế.',
        'Bếp và phòng ăn nối liền thành một không gian duy nhất — nơi cả nhà gặp nhau mỗi tối.',
      ],
    },
    en: {
      title: 'Tram Apartment',
      location: 'Ba Dinh, Hanoi',
      scope: 'Interior design',
      summary: 'A three-bedroom apartment for three generations — orderly without feeling cold.',
      body: [
        'All storage is concealed in the walls to give the floor plan back to the family. Smoked oak and linen keep the apartment warm despite a very restrained palette.',
        'Kitchen and dining merge into a single room — the place where the whole family meets each evening.',
      ],
    },
  },
  {
    slug: 'biet-thu-doi-thong',
    category: 'architecture',
    year: '2023',
    area: '480 m²',
    cover: 'villaB',
    gallery: ['houseC', 'livingF', 'interiorC', 'archB'],
    vi: {
      title: 'Biệt Thự Đồi Thông',
      location: 'Đà Lạt, Lâm Đồng',
      scope: 'Kiến trúc & nội thất',
      summary: 'Ngôi nhà nghỉ nép theo sườn dốc, giữ nguyên từng gốc thông sẵn có trên khu đất.',
      body: [
        'Chúng tôi khảo sát vị trí từng cây thông trước khi vẽ nét đầu tiên. Mặt bằng gãy khúc theo đường đồng mức để không phải san gạt và không phải đốn cây nào.',
        'Lò sưởi đặt ở trung tâm, mọi phòng đều nhìn thấy ngọn lửa và thung lũng cùng lúc.',
      ],
    },
    en: {
      title: 'Pine Hill Villa',
      location: 'Da Lat, Lam Dong',
      scope: 'Architecture & interiors',
      summary: 'A retreat that follows the slope and keeps every existing pine on the site.',
      body: [
        'We surveyed the position of each pine before drawing the first line. The plan bends along the contour lines so nothing had to be levelled and no tree had to be felled.',
        'A fireplace sits at the centre; every room sees the flame and the valley at once.',
      ],
    },
  },
  {
    slug: 'duplex-anh-sang',
    category: 'interior',
    year: '2023',
    area: '196 m²',
    cover: 'interiorD',
    gallery: ['livingB', 'aptB', 'kitchen', 'bedroomA'],
    vi: {
      title: 'Duplex Ánh Sáng',
      location: 'Quận 7, TP. Hồ Chí Minh',
      scope: 'Thiết kế nội thất',
      summary: 'Căn duplex thông tầng với bức tường kệ sách cao sáu mét làm trục chính.',
      body: [
        'Khoảng thông tầng được giữ trọn vẹn. Một bức tường kệ sách chạy suốt hai tầng nối phòng khách bên dưới với phòng làm việc bên trên.',
        'Rèm lanh hai lớp lọc ánh nắng hướng đông thành một thứ ánh sáng mềm suốt buổi sáng.',
      ],
    },
    en: {
      title: 'Light Duplex',
      location: 'District 7, Ho Chi Minh City',
      scope: 'Interior design',
      summary: 'A double-height duplex organised around a six-metre wall of books.',
      body: [
        'The void is kept whole. A bookshelf wall runs through both floors, linking the living room below with the study above.',
        'Two layers of linen curtain filter the eastern sun into a soft light that lasts all morning.',
      ],
    },
  },
];

export const categories = {
  all: { vi: 'Tất cả', en: 'All' },
  architecture: { vi: 'Kiến trúc', en: 'Architecture' },
  interior: { vi: 'Nội thất', en: 'Interiors' },
};

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
