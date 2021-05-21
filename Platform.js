class Platform
{
    constructor(posX)
    {
        this.sptX = posX; //x-position
        this.sptY = 650; //y-position
        this.sptW = random(80, 250); //width
        this.sptH = random([120, 190, 250]); //height
        this.spt = createSprite(this.sptX, this.sptY, this.sptW, this.sptH); //platform
        this.spt.shapeColor = "green";
        this.spt.addImage("ground", groundImage);
    }
};