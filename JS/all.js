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
    },
    computed: {
      //第一次寫的方法，被合併至calendarFirstDay
      // monthFirstDay() {
      //   const date = new Date(this.calendar.year, this.calendar.month, 1)
      //   return {
      //     year: date.getFullYear(), //this.calendar.year
      //     month: date.getMonth(), //this.calendar.month
      //     date: date.getDate(), //1
      //     day: date.getDay(),
      //   }
      // },\

      //尋找整張日曆表的第一天
      calendarFirstDay() {
        //mdate是為了查這個月的第一天是星期幾
        const mdate = new Date(this.calendar.year, this.calendar.month, 1)
        //date是為了計算這個月的第一個星期日是哪一天
        const date = new Date(this.calendar.year, this.calendar.month, 1 - mdate.getDay())
        return {
          year: date.getFullYear(), //this.calendar.year
          month: date.getMonth(), //this.calendar.month
          date: date.getDate(), //1
          day: date.getDay(),
        }
      },
      //繪製整張calendar
      calendarMonth() {
        const data = [];
        let date;
        for (let i = 0; i < 42; i++) {
          date = new Date(this.calendarFirstDay.year, this.calendarFirstDay.month, this.calendarFirstDay.date + i)
          data.push({
            year: date.getFullYear(), //this.calendar.year
            month: date.getMonth(), //this.calendar.month
            date: date.getDate(), //1
            day: date.getDay(),
          })
        }
        return data;
      }
    }
  })
})(Vue)