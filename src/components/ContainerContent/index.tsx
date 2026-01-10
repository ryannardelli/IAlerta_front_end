type ContainerContentProps = {
  children: React.ReactNode;
  className?: string;
}

export function ContainerContent({ children, className }: ContainerContentProps) {
  return(
    <section className={className}>
       {children}
    </section>
  );
}
