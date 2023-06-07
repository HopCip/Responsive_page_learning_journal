import { blogPostsArray } from "./data.js"

const home = document.querySelector('.home')
const aboutMe = document.querySelector('.about_me')
const aboutMeSection = document.querySelector('.about_me_section')
const main = document.querySelector('.main')
const mainHome = document.querySelector('.main_home')
const navHeader = document.querySelector('.nav_header')
const mainHeader = document.querySelector('.main_header')

home.addEventListener('click', renderHome)
mainHeader.addEventListener('click', renderHome)
navHeader.addEventListener('click', renderMain)
aboutMe.addEventListener('click', renderAboutMe)

/* RENDER BLOGS POSTS */

function getBlogPostsHtml(){
    let blogPost = ""
    blogPostsArray.forEach(function(blog){
        blogPost += `
            <section class="blog_section">
                <div class="image_div">
                    <image class="blog_image" src="${blog.image}">
                </div>
                <p class="blog_date">${blog.date}</p>
                <h5 class="blog_header">${blog.header}</h5>
                <p class="blog_text">${blog.text}
                </p>
            </section>
        `
        })
   return blogPost
}

function renderBlogPosts(){
    document.getElementById('sections').innerHTML = getBlogPostsHtml()
}

renderBlogPosts()

/* RENDER ON CLICK */

function renderMain() {
  mainHome.style.display = 'none'
  main.style.display = 'block'
  aboutMeSection.style.display = 'none'
}

function renderAboutMe() {
  mainHome.style.display = 'none'
  main.style.display = 'none'
  aboutMeSection.innerHTML = `
    <div class="profile_photo_picture">
        <img class="profile_photo" src="images/img_avatar.png" alt="profile_picture">
    </div>
    <h3 class="about_me_header">Hi there! My name is Lubdy and welcome to my learning journal.</h3>
    <p class="main_p_home">After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.
    </p>
    <div>
        <h5 class="main_home_headers">How I stay committed to learning</h5>
            <p class="main_home_texts">Quasi, omnis optio accusantium ad deleniti itaque maxime nostrum quidem consequatur eius voluptate vitae, ullam similique iure, reiciendis quibusdam vel rem sint. Nam, nulla veniam. Tempora dolorem voluptatibus velit rem atque nemo fuga. Cum animi cupiditate deserunt, quibusdam sapiente rerum exercitationem cumque aperiam ipsa laborum unde impedit? Vero perferendis adipisci aut, ipsum, ratione commodi expedita maxime, officiis ea beatae pariatur quam eum doloremque quaerat ad corrupti voluptatem molestiae? Adipisci repudiandae hic quibusdam. Commodi itaque est veniam, nisi sequi nihil excepturi incidunt repellendus esse repudiandae! Id natus aut error repudiandae incidunt molestiae iste iusto dicta non saepe, itaque velit provident esse optio delectus consequuntur laboriosam dolores vitae rem culpa beatae enim nulla tempore nam?</p> 
        <h5 class="main_home_headers">How I got started</h5>
        <p class="main_home_texts"> Porro distinctio suscipit dicta, odit quaerat dolore nesciunt id velit incidunt repellat in corrupti. Odio aliquam saepe fugit, delectus ad in impedit necessitatibus possimus sed harum expedita est quo cum excepturi quam pariatur quisquam hic aliquid adipisci voluptas, soluta debitis accusamus. Ad tempora id, corporis praesentium quasi harum eveniet modi in non nesciunt quaerat repudiandae. Perspiciatis nesciunt accusantium odit sit voluptas consequatur quibusdam iste veritatis ut, esse eos in enim rem atque laudantium aperiam totam, repellendus nobis? Ipsam nemo rerum harum inventore totam temporibus consequuntur aut, excepturi corrupti alias! Sed unde dolor, provident qui eos impedit eum amet laudantium, ratione, iure sint? Sunt voluptate blanditiis aspernatur libero molestias debitis repellat excepturi repellendus, harum accusamus minima, commodi perferendis cupiditate modi accusantium. Nulla dolores dolor vel cum perspiciatis. Repellendus placeat tempore amet delectus recusandae nemo sunt deleniti porro saepe, provident quae molestias incidunt!
        </p>
    </div>
    <div class="recent_post_div">
        <p class="recent_post">Recent posts</p>
    </div>`

  aboutMeSection.style.display = 'block'
}

function renderHome() {
  aboutMeSection.style.display = 'none'
  main.style.display = 'none'
  mainHome.innerHTML = `
            <p class="main_date_home">JULY 23, 2022</p>
            <h2 class="main_header_home">My new journey as a bootcamp student.</h2>
            <p class="main_p_home">After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
            <div class="main_image_home_div"> 
                <img class="main_image_home" src="images/article-image-hero.png" alt="article_image">
            </div>
            <div>
                <h5 class="main_home_headers">How I stay committed to learning</h5>
                 <p class="main_home_texts">Quasi, omnis optio accusantium ad deleniti itaque maxime nostrum quidem consequatur eius voluptate vitae, ullam similique iure, reiciendis quibusdam vel rem sint. Nam, nulla veniam. Tempora dolorem voluptatibus velit rem atque nemo fuga. Cum animi cupiditate deserunt, quibusdam sapiente rerum exercitationem cumque aperiam ipsa laborum unde impedit? Vero perferendis adipisci aut, ipsum, ratione commodi expedita maxime, officiis ea beatae pariatur quam eum doloremque quaerat ad corrupti voluptatem molestiae? Adipisci repudiandae hic quibusdam. Commodi itaque est veniam, nisi sequi nihil excepturi incidunt repellendus esse repudiandae! Id natus aut error repudiandae incidunt molestiae iste iusto dicta non saepe, itaque velit provident esse optio delectus consequuntur laboriosam dolores vitae rem culpa beatae enim nulla tempore nam?.</p> 
                <h5 class="main_home_headers">How I got started</h5>
                <p class="main_home_texts"> Porro distinctio suscipit dicta, odit quaerat dolore nesciunt id velit incidunt repellat in corrupti. Odio aliquam saepe fugit, delectus ad in impedit necessitatibus possimus sed harum expedita est quo cum excepturi quam pariatur quisquam hic aliquid adipisci voluptas, soluta debitis accusamus. Ad tempora id, corporis praesentium quasi harum eveniet modi in non nesciunt quaerat repudiandae. Perspiciatis nesciunt accusantium odit sit voluptas consequatur quibusdam iste veritatis ut, esse eos in enim rem atque laudantium aperiam totam, repellendus nobis? Ipsam nemo rerum harum inventore totam temporibus consequuntur aut, excepturi corrupti alias! Sed unde dolor, provident qui eos impedit eum amet laudantium, ratione, iure sint? Sunt voluptate blanditiis aspernatur libero molestias debitis repellat excepturi repellendus, harum accusamus minima, commodi perferendis cupiditate modi accusantium. Nulla dolores dolor vel cum perspiciatis. Repellendus placeat tempore amet delectus recusandae nemo sunt deleniti porro saepe, provident quae molestias incidunt!
                </p>
            </div>
            <div class="recent_post_div">
                <p class="recent_post">Recent posts</p>
            </div>`
  mainHome.style.display = 'block'
}


