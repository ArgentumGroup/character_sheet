# character_sheet

To create a new character:

```JSX
  type: "POST",
  url: "api/characters",
  data: {
    character:{
      user_id: theCurrentUsersId
      campaign_id: theIdOfWhateverCampaignYouSelect
    }
  }
```

To view a particular character:

```JSX
  url: "api/characters/{theIdOfWhateverCharacterYouSelect}",
```

To update a particular character:

```JSX
  type: "PATCH",
  url: "api/characters/{theIdOfWhateverCharacterYouSelect}",
  data: {
    YOU DON'T NEED TO SEND ALL OF THESE PARAMETERS EVERY TIME YOU UPDATE
    name: theNewNameOfTheCharacter
    level: theNewLevelOfTheCharacter
    race: theNewRaceOfTheCharacter
    klass:  theNewKlassOfTheCharacter
  }
```

To create a new campaign:

```JSX
  type: "POST",
  url: "api/campaigns",
  data: {
    campaign:{
      name: this.refs.name.value
```
