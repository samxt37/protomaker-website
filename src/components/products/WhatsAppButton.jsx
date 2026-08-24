import { MessageCircle } from 'lucide-react';
import { useI18n } from '../../i18n/LanguageContext';

/**
 * WhatsApp order CTA — opens wa.me with a prefilled, localized message.
 * @param {{message: string, label: string, size?: 'md'|'lg'|'sm', ghost?: boolean}} props
 */
export default function WhatsAppButton({ message, label, size = 'md', ghost = false }) {
  const { wa } = useI18n();
  const cls = [
    'wa-btn',
    size === 'lg' ? 'wa-lg' : size === 'sm' ? 'wa-sm' : '',
    ghost ? 'wa-ghost' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a
      className={cls}
      href={wa(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-component="wa-button"
    >
      <MessageCircle size={size === 'lg' ? 20 : 16} strokeWidth={1.8} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
