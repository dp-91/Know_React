import './SemanticHTML.css';

/* notes for reader 
By using these tags appropriately, you can enhance the semantic structure of your HTML, 
making your content more accessible and easier to understand for both users and search engines.
*/

const SemanticHTML = () => {
    return <>
        { /* ASSUME this inside of body tag*/ }
        {
            /*  ARTICLE TAG use Case
                Blog posts
                News articles
                Forum posts
                Product descriptions
                User comments
            */
        }
        <article>
            <h2>Article Tag Header!</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corrupti facere quia minus dicta nostrum doloremque quae sint ipsum quod, exercitationem pariatur quis in, deserunt voluptatem autem amet ut eveniet voluptates...
            </p>
        </article>
        {
            /*  Section TAG use Case
                Meant for Thematic grouping of content - not standalone in contrast to article tag
                Logicial structure for flow
            */
        }
        <br />
        <section>
            <h2>Section 1 Tag Introduction</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perspiciatis praesentium cupiditate quam sint sapiente quis alias, optio nulla ullam.</p>
        </section>
        <section>
            <h2>Section 2 Tag Details</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, quis!</p>
        </section>
    </>

}

export default SemanticHTML;