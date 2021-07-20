import React from 'react'

const Section = (props) => (
    <section>
        <h2>{props.title}</h2>
        {props.children}
    </section>
);

export default Section;