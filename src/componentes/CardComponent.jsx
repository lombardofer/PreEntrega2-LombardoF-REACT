export default function CardComponent({ children, title }) {
    return (
      <>
        <section>
            {children}
            <h3 style={{border:'3px solid black', padding: '10px'}}>{title}</h3>
        </section>
      </>
    );
  }
  