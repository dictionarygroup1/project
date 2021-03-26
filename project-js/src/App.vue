<template>
    <div>
      <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowarp flex-row">
        <div class="container">
          <router-link to="/" class="navbar-brand float-left">MEVN</router-link>
          <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item">
              <router-link to="/" class="nav-link">หน้าแรก</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/add" class="nav-link">เพิ่มผู้ใช้</router-link>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container mt-5">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>