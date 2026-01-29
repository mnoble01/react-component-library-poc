import styles from './Button.module.css'

interface ButtonArgs {
  type: 'primary' | 'secondary' | 'tertiary' | 'destructive';
  label: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ type, label, onClick, className }: ButtonArgs) {
  return (
    <>
      <div className={className}>
        <button className={`${styles['button']} ${styles[type]}`} onClick={onClick}>
          {label}
        </button>
      </div>
    </>
  )
}
