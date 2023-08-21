import { TypographyProps } from "../../type";

export const Typography = ({ children, variant, className }: TypographyProps) => {

    if (variant > 6 || variant < 1) {
        throw new Error('variant must be between 1 and 6');
    }

    const Component = `h${variant}` as any;
    
    return (
        <Component className={className}>
            {children}
        </Component>
    );
};

