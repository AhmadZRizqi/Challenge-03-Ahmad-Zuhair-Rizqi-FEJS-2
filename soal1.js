// Ubah input draft dan crew dibawah
var emptyShip = new Ship(20, 10);

function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;

    draftCrew = 1.5 * crew;

    if (draft > 20) {
        console.log("Banyak Nih Muatan Kapalnya.")
    } else if (draft <= 20) {
        if (draft > draftCrew) {
            console.log("Banyak Nih Muatan Kapalnya.")
        } else if (draft < draftCrew) {
            console.log("Lebih Banyak Muatan Orangnya.")
        } else if (draft === draftCrew) {
            console.log("Muatan Kapal dan Orang Sama Berat.")
        } else {
            "Error: Input correct value"
        }
    }
}