export default function GradientText({ children, className = '', as: Tag = 'span', ...props }) {
  return (
    <Tag
      style={{
        backgroundImage: 'linear-gradient(45deg, #1E90FF, #FF1493)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}
