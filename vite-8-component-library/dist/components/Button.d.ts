interface ButtonArgs {
    type: 'primary' | 'secondary' | 'tertiary' | 'destructive';
    label: string;
    onClick?: () => void;
    className?: string;
}
export default function Button({ type, label, onClick, className }: ButtonArgs): any;
export {};
