import React from 'react'
import DataBlog from './DataBlog'
import CardBlog from './CardBlog.jsx'

const Blog = () => {
  return (
    <>
      <section className="blog">
        <article className="container">
           <h1> Blog </h1>
          <div className="container-card">
            {
              DataBlog.map((item) => {
                  return (
                    <div key={item.id}>
                      <CardBlog img={item.img} title={item.title} descript={item.descript} id={item.id}/>
                    </div>
                  )
              })
            }
          </div>
        </article>
      </section>
    </>
  )
}

export default Blog