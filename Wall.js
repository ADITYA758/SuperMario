class Wall
{
    constructor(posX)
    {
        this.sptX = posX; //x-position
        this.sptY = height-random([400,550]); //y-position
        this.sptW = random(80, 250); //width
        this.sptH = random([120, 190, 250]); //height
        this.spt = createSprite(this.sptX, this.sptY, this.sptW, this.sptH); //platform
        this.spt.shapeColor = "green";
        this.spt.addImage("wall", wallImage);
        this.spt.scale=0.09;
    }
};