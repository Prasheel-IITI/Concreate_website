Vue.component("footer-component", {
    template: `
  <div class="container-fluid bg-dark text-white py-1" id="footer">
    <div class="container">
      <h3 class="py-2">Connect with us</h3>
      <ul class="list-inline">
        <li class="list-inline-item pb-3">
            <a class="rounded" target="_blank" href="https://www.instagram.com/concreate_iiti/">
                <i class="fab fa-instagram"></i>
                <p class="pl-2">follow us on Instagram</p>
            </a>
        </li>
        <li class="list-inline-item pb-3">
            <a class="rounded" target="_blank" href="https://www.facebook.com/Concreate-IITI-759858971047175/">
                <i class="fab fa-facebook"></i>
                <p class="pl-2">follow us on Facebook</p>
            </a>
        </li>
        <li class="list-inline-item pb-3">
            <a class="rounded" target="_blank" href="mailto:concreate@iiti.ac.in">
                <i class="far fa-envelope"></i>
                <p class="pl-2">mail us</p>
            </a>
        </li>
        <li class="list-inline-item pb-3" style="float:right">
            Maintained by ConCreate Club and<a href="http://github.com/DaemonLab/" target="_blank" > Daemon Labs </a>
        </li>
      </ul>
    </div>
  </div>
  `
});

new Vue({
    el: "#foot",
});
