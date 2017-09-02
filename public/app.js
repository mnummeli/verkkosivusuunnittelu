$(function() {
  $('#nimiLomake').submit(function(e) {
    var nimiTeksti = $('#nimi').val();
    if(nimiTeksti !== '') {
      $('#tervehdys').html('<span id=\'tervehdysTeksti\'>Hei ' + nimiTeksti + '!</span>');
      $('#nimi').val('');
      $('#tervehdysTeksti').fadeOut(5000);
    }
    e.preventDefault();
  });
});
