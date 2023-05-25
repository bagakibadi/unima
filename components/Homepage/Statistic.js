export const Statistic = ({ data }) => {
  return (
    <section
      class="section-page no-paddingbottom sc-about--number"
      style={{ marginBottom: '80px' }}
    >
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-6 number-desc">
            <div class="section-title">
              <h3>Sekilas UNIMA</h3>
            </div>
            <div
              class="section-subtitle"
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></div>
          </div>
          <div class="col-md-5 col-sm-6">
            <div class="number-trophy text-center">
              <img src="/images/trophy.png" alt="" />
              <h3 dangerouslySetInnerHTML={{ __html: data.awardDescription }} />
            </div>
          </div>
        </div>
        <div class="number-counter number-row text-center">
          <div class="row">
            <div class="col-xs-6 col-md-3">
              <div class="number-col">
                <p>Latest Graduates</p>
                <h2 data-number="18" class="number-animate">
                  900+
                </h2>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="number-col">
                <p>Teachers</p>
                <h2 data-number="265" class="number-animate">
                  300+
                </h2>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="number-col">
                <p>
                  <i>Latest Graduates</i>
                </p>
                <h2 data-number="111" class="number-animate">
                  9
                </h2>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="number-col">
                <p>Students</p>
                <h2 data-number="23" class="number-animate">
                  17000+
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
