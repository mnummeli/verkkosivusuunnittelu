const tervehdysPalvelu = {
  laskuri: 0,
  tervehdi: (nimi, cb) => {
    cb({id: tervehdysPalvelu.laskuri++, nimi});
  }
};

module.exports=tervehdysPalvelu;
