Vue.component("blog-component", {
    props: ['post'],
    template: `
    <div class="col-lg-4 d-flex align-items-stretch">
        <div class="card" data-toggle="modal" :data-target="'#'+post.guid">
            <div  class="mybeautifulclass" >
                <img :src="post.imageLink" alt="" class="card-img-top">
            </div>
            <div class="card-body" >
                <div class="card-title">
                    {{post.title}}
                </div>
                <button
                <div class="blog-content" v-html="post.description" >
                </div>
                
            </div>
        </div>
    </div>
    `
});

Vue.component("blog-component-modal", {
    props: ['post'],
    template: `
    <div class="modal fade" :id="post.guid" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{post.title}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" v-html="post.description">
                    
                </div>
                </div>
            </div>
        </div>
    `
});

