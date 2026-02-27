export default function parseIcon(icon: String) {
  const safeIconName = icon?.includes(':')
    ? icon.replaceAll('_', '-')
    : `f7:${icon?.replaceAll('_', '-')}`;

  return safeIconName
}