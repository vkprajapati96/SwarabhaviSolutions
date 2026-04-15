const founders = [
  {
    initials: "SKM",
    name: "Suwansh Kumar Mishra",
    role: "Founder & CEO",
    since: "Est. Founder",
    desc: "12+ years of experience in designing & construction. Delivered 100+ projects across Delhi NCR. Software Engineer by profession from a renowned Delhi engineering college.",
    tag: "12+ Yrs Experience",
  },
  {
    initials: "RM",
    name: "Rubi Mishra",
    role: "Co-Founder & Director",
    since: "Board Member since 26.04.2023",
    desc: "Deeply involved in design and interior aspects of every project. An exceptional young talent driving revolutionary change in Real Estate through Swarabhavi Solutions Pvt. Ltd.",
    tag: "Design & Interiors",
  },
];

const team = [
  {
    initials: "VK",
    name: "Vikash Kayastha",
    role: "Site In-Charge",
    desc: "Controls projects start to finish. Ensures high-quality materials, innovative design, and feasibility reports while briefing contractors and developing architecture per client needs.",
  },
  {
    initials: "SG",
    name: "Subanshu Gupta",
    role: "Project Head – Surveillance",
    desc: "Experienced in creating functional and aesthetically pleasing layouts. Adept at handling all aspects of planning, design, and superior client service delivery.",
  },
  {
    initials: "AS",
    name: "Arun Sharma",
    role: "Interior Designer",
    desc: "30+ years in civil construction & turnkey interiors. Executed projects for high-profile and multinational clients — aluminum fabrication, glass facades, carpentry, electricals, AC ducting & more.",
  },
  {
    initials: "SG2",
    name: "Sandeep Gupta",
    role: "Business Associate",
    desc: "10+ years in IT and 4 years in Real Estate. Provides direction to associates, resolves client issues within company compliance, and supports business development.",
  },
];

const avatarColors = [
  { bg: "#dbeafe", text: "#1e40af" },
  { bg: "#dcfce7", text: "#166534" },
  { bg: "#fef3c7", text: "#92400e" },
  { bg: "#ede9fe", text: "#5b21b6" },
  { bg: "#fce7f3", text: "#9d174d" },
  { bg: "#e0f2fe", text: "#075985" },
];

export default function TeamSection() {
  return (
 <section className="bg-[#EBF3FB] w-full px-6 md:px-16 py-20">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <span className="text-base font-medium text-[#1a4e8a] uppercase tracking-widest">
        The People Behind the Work
      </span>
      <div className="w-14 h-[4px] bg-[#1a4e8a] rounded-full mx-auto my-5" />
      <h2 className="text-5xl font-semibold text-[#0d2d5c] mb-5">
        Leadership & Team
      </h2>
      <p className="text-[#4a6fa5] text-xl max-w-2xl mx-auto leading-relaxed">
        A skilled and dedicated team turning bold architectural visions into lasting structures across India.
      </p>
    </div>

    {/* Founders */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
      {founders.map((f, i) => (
        <div
          key={i}
          className="bg-white border border-[#c5d9ee] rounded-2xl p-8 flex flex-col gap-6"
        >
          <div className="flex items-center gap-5">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-semibold flex-shrink-0"
              style={{
                background: avatarColors[i].bg,
                color: avatarColors[i].text,
              }}
            >
              {f.initials}
            </div>
            <div>
              <p className="text-xl font-semibold text-[#0d2d5c]">{f.name}</p>
              <p className="text-base text-[#1a4e8a] font-medium">{f.role}</p>
              <p className="text-sm text-[#7a9abb] mt-1">{f.since}</p>
            </div>
          </div>

          <p className="text-lg text-[#4a6fa5] leading-relaxed">
            {f.desc}
          </p>

          <span className="self-start bg-[#EBF3FB] text-[#1a4e8a] text-base font-medium px-5 py-2 rounded-full border border-[#c5d9ee]">
            {f.tag}
          </span>
        </div>
      ))}
    </div>

    {/* Team */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {team.map((member, i) => {
        const color = avatarColors[(i + 2) % avatarColors.length];
        return (
          <div
            key={i}
            className="bg-white border border-[#c5d9ee] rounded-2xl p-7 flex flex-col gap-5 hover:-translate-y-1 transition-transform"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-semibold flex-shrink-0"
              style={{ background: color.bg, color: color.text }}
            >
              {member.initials === "SG2" ? "SG" : member.initials}
            </div>

            <div>
              <p className="text-lg font-semibold text-[#0d2d5c]">
                {member.name}
              </p>
              <p className="text-base text-[#1a4e8a] font-medium mt-1">
                {member.role}
              </p>
            </div>

            <p className="text-base text-[#4a6fa5] leading-relaxed">
              {member.desc}
            </p>
          </div>
        );
      })}
    </div>

  </div>
</section>
  );
}