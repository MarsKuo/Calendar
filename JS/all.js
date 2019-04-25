; (function (Vue) {
  new Vue({
    el: '#app',
    data() {
      return {
        today: {
          year: 0, //年
          month: 0,  //月
          date: 0,  //日
          day: 0  //星期幾 
        },
        calendar: {
          year: 0,
          month: 0,
          date: 0,
          day: 0
        }
      }
    },
    mounted() {
      this.setToday();
    },
    methods: {
      setToday() {
        const date = new Date()
        this.today.year = this.calendar.year = date.getFullYear();
        this.today.month = this.calendar.month = date.getMonth();
        this.today.date = this.calendar.date = date.getDate();
        this.today.day = this.calendar.day = date.getDay();
      },
      adjustYear(fix) {
        this.calendar.year += fix;
      },
      adjustMonth(fix) {
        // this.calendar.month += fix; //範圍
        let month = this.calendar.month + fix;
        if (month > 11) {
          this.adjustYear(1);
          this.calendar.month = 0;
        } else if (month < 0) {
          this.adjustYear(-1);
          this.calendar.month = 11;
        } else {
          this.calendar.month = month;
        }
      }
    }
  })
})(Vue)