var app = new Vue({
  el: '#app',
  data: {
    currentTab: ""
  },
  methods: {
    toggle: function (tab) {
      this.currentTab = tab
    }
  }
})