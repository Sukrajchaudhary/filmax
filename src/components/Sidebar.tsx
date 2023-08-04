function Sidebar() {
  //   const n = 50; // Or something else
  const categories = [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];

  const genres = [
    "Pop",
    "Rock",
    "Hip Hop",
    "Jazz",
    "Country",
    "R&B",
    "Electronic",
    "Classical",
    "Blues",
    "Reggae",
    "Folk",
    "Metal",
    "Punk",
    "Indie",
    "Dance",
    "Funk",
    "Soul",
    "Gospel",
    "Latin",
    "World",
    "Alternative",
    "Grunge",
    "EDM",
    "Techno",
    "House",
    "Disco",
    "Rap",
    "Trap",
    "Ska",
    "Funk",
    "Ambient",
    "Chillout",
    "Instrumental",
    "Acoustic",
  ];
  return (
    <div className="h-full z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <button className="">
          <label htmlFor="my-drawer" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </button>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 md:w-80 bg-base-200 h-fit text-base-content">
          {/* Sidebar content here */}
          <li>
            <a
              href="/"
              className="btn btn-ghost normal-case text-3xl p-3 text-red-500"
            >
              Filmaxy
            </a>
          </li>
          <div className="divider" />

          <div>
            <p className="">Categories</p>
            <li className="mt-3">
              {categories.map((cat) => (
                <a href="/" className="p-4" key={cat.value}>
                  {cat.label}
                </a>
              ))}
            </li>
          </div>

          <div className="divider" />

          <div>
            <p className="">Genres</p>
            <li className="mt-3">
              {genres.map((gen, i) => (
                <a href="/" className="p-4" key={i}>
                  {gen}
                </a>
              ))}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
