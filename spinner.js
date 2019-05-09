var twisterPatches = ['C3_016 pink', 'C3_016 orange', 'C3_016 blue',
                        'C3_017 pink', 'C3_017 organge', 'C3_017 blue',
                          'C3_018 pink', 'C3_018 organge', 'C3_018 blue',
                            'C3_021 pink', 'C3_021 organge', 'C3_021 blue',
                              'C3_022 pink', 'C3_022 organge', 'C3_022 blue',
                                'C3_023 pink', 'C3_023 organge', 'C3_023 blue',
                                'C3_024 pink', 'C3_024 organge', 'C3_024 blue',];

//var patchPicked = twisterPatches[Math.floor(Math.random() * twisterPatches.length)];
//console.log(patchPicked())


function spin(twisterPatches) {
  return Math.floor(Math.random() * twisterPatches.length);
};

console.log(spin())