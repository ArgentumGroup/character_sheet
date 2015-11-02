# character_sheet

To create a new character:
  type: "POST",
  url: "api/characters",
  data: {
    character:{
      user_id: theCurrentUsersId
      campaign_id: theIdOfWhateverCampaignYouSelect

To view a particular character:
  url: "api/characters/{theIdofWhateverCharacterYouSelect}"

To create a new campaign:
  type: "POST",
  url: "api/campaigns",
  data: {
    campaign:{
      name: this.refs.name.value
