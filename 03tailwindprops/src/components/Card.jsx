import React from 'react'

function Card({username, post}) {
    //console.log(props)
  return (
    <div>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800" >
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/27219791/pexels-photo-27219791.jpeg?_gl=1*uz1ljh*_ga*OTE4NDk4NDkyLjE3NjkyNjMwNjM.*_ga_8JE65Q40S6*czE3NjkyNjMwNjMkbzEkZzEkdDE3NjkyNjQxNjckajQ4JGwwJGgw" alt="Photo by Vitor Diniz from Pexels:" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, exercitationem.
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        {post}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card