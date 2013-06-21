timing_test(function() {
  at(0, function() {
    assert_styles('body', {'textShadow':'rgb(255, 0, 0) 100px 100px 0px, rgb(255, 0, 0) 0px 100px 10px'});
  }, "Autogenerated test at t=0");
  at(0.5, function() {
    assert_styles('body', {'textShadow':'rgba(191, 0, 0, 0.74902) 75px 75px 0px, rgba(191, 0, 0, 0.74902) 0px 75px 7px'});
  }, "Autogenerated test at t=0.5");
  at(1, function() {
    assert_styles('body', {'textShadow':'rgba(128, 0, 0, 0.498039) 50px 50px 0px, rgba(128, 0, 0, 0.498039) 0px 50px 5px'});
  }, "Autogenerated test at t=1");
  at(1.5, function() {
    assert_styles('body', {'textShadow':'rgba(64, 0, 0, 0.247059) 25px 25px 0px, rgba(64, 0, 0, 0.247059) 0px 25px 2px'});
  }, "Autogenerated test at t=1.5");
  at(2, function() {
    assert_styles('body', {'textShadow':'rgb(0, 0, 0) 0px 0px 0px'});
  }, "Autogenerated test at t=2");
  at(2.5, function() {
    assert_styles('body', {'textShadow':'rgb(0, 0, 0) 0px 0px 0px'});
  }, "Autogenerated test at t=2.5");
}, "Autogenerated checks.");
