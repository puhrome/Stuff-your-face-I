/**
 * Stuff your face I Created by Phirom Yim on 4/14/14.
 */
var weight = 250;
var competitorWeight = 250;
//if competitor weighs enough they can qualify
//if competitor doesn't weigh enough the need to gain some weight

var qualification;
qualification = (competitorWeight >= 250)? "The competitor qualifies for the heavy weight division" : "The competitor needs to gain some weight!";
console.log(qualification);
