export default function SectionHeading({ tag, title, subtitle, light = false }) {
  return (
    <div className="text-center mb-14">
      {tag && (
        <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
          {tag}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl mx-auto text-lg ${light ? 'text-gray-300' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
