async function createEvolution(pokemon) {
  const evolution = document.querySelector("#evolution");
  evolution.innerHTML = "";
  evolution.classList.add("hidden");
  evolution.classList.add("evolution");

  const pokemonChain = await pokeApi.getPokemonEvolution(pokemon.id);
  const urlImg =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

  var evoChain = [];
  var evolutionsTotal = 0;
  var evoData = pokemonChain.chain;
  do {
    var id = await pokeApi.getPokemonId(evoData.species.name);
    evoChain.push({
      "species_name": evoData.species.name,
      "pokemon_id": id
    });
    evolutionsTotal++;
    evoData = evoData.evolves_to[0];
  } while (!!evoData && evoData.hasOwnProperty('evolves_to'));


  if (evolutionsTotal === 1) {
    evolution.innerHTML = `
  <li>                         
  <div class="evolution">
      <div class="img-group">
        <div class="img">
          <img src="${urlImg}${evoChain[0].pokemon_id}.svg" alt="">
        </div>
        <p>${evoChain[0].species_name}</p>
      </div>
  </div>
  </li>
`;
  }

  if (evolutionsTotal === 2) {
    evolution.innerHTML = `
  <li>                         
  <div class="evolution">
      <div class="img-group">
        <div class="img">
          <img src="${urlImg}${evoChain[0].pokemon_id}.svg" alt="">
        </div>
        <p>${evoChain[0].species_name}</p>
      </div>
    <i class="fa fa-arrow-right"></i>

    <div class="img-group">
      <div class="img" >
        <img src="${urlImg}${evoChain[1].pokemon_id}.svg" alt="">
      </div>
      <p>${evoChain[1].species_name}</p>
    </div>
  </li>
`;
  }

  if (evolutionsTotal === 3) {
    evolution.innerHTML = `
  <li>                         
  <div class="evolution">
      <div class="img-group">
        <div class="img">
          <img src="${urlImg}${evoChain[0].pokemon_id}.svg" alt="">
        </div>
        <p>${evoChain[0].species_name}</p>
      </div>
    <i class="fa fa-arrow-right"></i>

    <div class="img-group">
      <div class="img" >
        <img src="${urlImg}${evoChain[1].pokemon_id}.svg" alt="">
      </div>
      <p>${evoChain[1].species_name}</p>
    </div>
    <i class="fa fa-arrow-right"></i>

    <div class="img-group">
      <div class="img">
        <img src="${urlImg}${evoChain[2].pokemon_id}.svg" alt="">
      </div>
      <p>${evoChain[2].species_name}</p>
    </div>
  </div>
  </li>
`;
  }

}
