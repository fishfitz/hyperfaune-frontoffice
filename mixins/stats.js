export default () => ({
  data() {
    return { rows: [] };
  },
  computed: {
    start() {
      return this.$store.state.stats.start;
    },
    end() {
      return this.$store.state.stats.end;
    },
    interval() {
      return this.$store.state.stats.interval;
    },
    refresh() {
      return this.$store.state.stats.refresh;
    },
    rerender() {
      return this.$store.state.stats.rerender;
    }
  },
  methods: {
    fetch() {
      this.$request(
        () => this.$axios.$get(this.path, { params: Object.assign({}, { start: this.start, end: this.end, interval: this.interval }, this.params) }),
        (data) => {
          this.rows = data || [];
          this.$emit('fetch', this.rows);
        }
      );
    },
    render() {
      if (this.$refs.chart) this.$refs.chart.echarts.resize();
    }
  },
  mounted() {
    this.fetch();
  },
  watch: {
    start() {
      this.fetch();
    },
    end() {
      this.fetch();
    },
    interval() {
      this.fetch();
    },
    refresh() {
      this.fetch();
    },
    rerender() {
      this.render();
    }
  }
});
