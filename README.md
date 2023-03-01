# Visualiser les données des registres de la Comédie Française
Du 19 au 21 mai 2016, l’opportunité m’a été offerte de participer à un
colloque se tenant à Boston et intitulé [Pratiques Théâtrales et Archives
Numérisées](http://cfregisters.org/img/assets/hero/programmeRCF_web_170215_190322.pdf).
Il portait principalement sur les registres de la Comédie-Française, archive
numérisée et en partie saisie informatiquement qui détaille notamment les
recettes, dépenses et distributions pour chaque représentation de 1680 à 1793.

C’est plus précisément à l’occasion du hackathon inclu dans la programmation
de ce colloque que je me suis interrogée sur la question de la représentation
visuelle de données informatiques issues des registres. Ce hackathon avait en
effet pour objectif d’inciter ses participants à proposer des solutions
informatiques facilitant l’appropriation des données des registres par la
recherche sur le théâtre, et j’ai donc souhaité proposer une [visualisation de
données qui permettrait d’appréhender d’un seul coup d’oeil le contenu et la
richesse de la programmation de la comédie-
française](https://bl.ocks.org/raphlap/raw/43b07355c0a552ba6057b6c36717fe82/).

Il avait déjà été question pour moi de représentation visuelle et d’outil de
découverte de collections bibliographiques dans le cadre des fonctions que
j’occupe actuellement en tant que administratrice d’une [interface de
catalogue de bibliothèque](http://data.bnf.fr).

La visualisation de données que j’ai produite dans le cadre du projet des
registres est donc très influencée par mon approche des métadonnées
bibliographiques et des catalogues, et il me sera nécessaire d’exposer ici
cette vision pour mieux faire comprendre la tournure que cette dernière a
prise.

Les enjeux graphiques du catalogage des collections ainsi que des interfaces
de recherche bibliographique en ligne peuvent être éclairés à la lumière des
_Mots et des Choses_ de Michel Foucault[1](»#fn1″). On peut en effet
appréhender le catalogue en ligne, au même titre probablement que les
inventaires et autres outils de recherche en archives, comme une
représentation redoublée : il est en effet constitué de courtes descriptions
formelles cartographiant une nappe continue de documents conservés dans une
institution patrimoniale, et ces courtes descriptions bibliographiques sont
elles-mêmes symboliquement représentées à l’écran et sur le web au travers de
dispositifs graphiques, qu’il s’agisse d’une [visualisation innovante telle
qu’a pu en produire la New York Public
Library](https://www.nypl.org/blog/2014/07/31/networked-catalog), ou bien
d’une interface plus classique affichant les métadonnées bibliographiques sous
forme de listes et présentant [une navigation dite “à
facette”](https://fr.wikipedia.org/wiki/Recherche_%C3%A0_facettes). Il y a
donc une double cartographie d’un réel documentaire qui s’opère, la première
étant celle du catalogueur qui inventorie ses collections, la seconde, celle
du graphiste qui bâtit un outil de recherche visuel et informatisé à partir du
résultat de cet inventaire : or, c’est bien ce redoublement de la
représentation visuelle d’une source documentaire qui a fourni la première
inspiration de la visualisation de données que j’ai souhaité proposer pour les
registres de la Comédie-Française.

Là où les métadonnées dressent un tableau de collections archivistiques ou
bibliographiques, il s'agissait de dresser une sorte de scène-tableau des
saisons de la Comédie-Française depuis 1680 jusqu’à 1793. Inversant ainsi la
convention graphique qui veut que la chronologie serve de repère orthonormé,
c’est au contraire la matérialité des saisons que j’ai voulu mettre en lumière
en faisant de ces dernières l’objet même du tableau, quand les auteurs et
pièces qui ont fait le plus recettes au cours de chacune de ces dernières
devaient servir eux-mêmes d’encadrement, sous la forme de pastilles de couleur
disposées horizontalement et verticalement autour des saisons.

![RCF_1](https://github.com/raphlap/rcf_flying_authors/blob/master/rcf_1.png)
Premier tableau représentant chacune des saisons de la Comédie-Française ainsi
que les auteurs et pièces ayant fait le plus recette pour chacune d'entre
elles.[/caption]

Il a ensuite paru judicieux de compléter cette première représentation
finalement assez peu informative d’une seconde qui pour chaque saison faisait
apparaître un déroulé chronologique des auteurs ayant fait le plus de recette
par semaine, à la fois en première et seconde partie de soirée. Visualisable
après sélection par l’utilisateur d’une année, cette seconde représentation
enchâssée dans la première redonne une place conventionnelle au temps, ce
dernier étant symbolisé par une ligne verticale découpée en douze mois.

![RCF_2](https://github.com/raphlap/rcf_flying_authors/blob/master/rcf_2.png)
Second tableau représentant pour une année sélectionnée les auteurs ayant fait
le plus recette en première et seconde partie de soirée pour chaque semaine de
l'année.[/caption]

En ne sélectionnant que les auteurs ayant eu du succès, c’est de nouveau la
matérialité d’une année de programmation théâtrale que j'ai voulu mettre en
lumière, inspirée en cela par l’ _Illusion Comique_ :

“On tire un rideau, et on voit tous les comédiens qui partagent leur argent.”
(V,5).[2](»#fn2″)

Mais au-delà de la coquetterie baroque qui était celle que je souhaitais pour
un tel dispositif, ce dernier donne-t-il véritablement à voir l’aventure d’un
siècle et demi de programmation théâtrale ? Cette approche bibliographique
avec laquelle on aborde ici la visualisation des registres masque peut-être la
véritable nature archivistique de ces derniers.

En effet, à l’opposé des métadonnées bibliographiques produites dans un but
d’ordonnancement et de visibilité des collections d’un établissement de
conservation, les données des registres relèvent plutôt d’une captation
partielle du réel à des fin non de publication mais d’administration : c’est
peut-être là l’équivalent de l’opposition que dresse Arlette Farge entre
l’imprimé, “chargé d’intention”, et l’archive judiciaire, “traces brutes de
vie qui ne demandaient aucunement à se raconter ainsi et qui y sont obligées,
parce qu’un jour confrontée aux réalités de la police et de la
répression.”[3](»#fn3″)

Il s’agit encore de savoir comment il se fait que la représentation graphique
classique ne parvienne pas à rendre compte de ce caractère “brut” et primitif
de l’archive. Il est possible de trouver quelques éléments de réponse à cette
question en dressant un parallèle entre l’archive et la photographie telle que
l’analyse Roland Barthes dans _La Chambre Claire_[4](»#fn4″). Il y aurait
peut-être quelque chose de similaire, en effet, entre la trace d’encre laissée
par le réel de l’archive et la trace chimique (chimique, elle l’était en tout
cas à l’origine) laissée par la lumière sur un négatif de photographie. On
pourrait dire qu’à la manière du photographe, le producteur de l’archive s’est
lui aussi en quelque sorte “trouvé là”, presque passif, se contentant
simplement d’ajuster sa focale à l’objet qu’il prenait, découpant dans le réel
les éléments qui correspondait aux exigences administratives et gestionnaires
de l’institution théâtrale qu’il servait (ces dernières étant décrites sur [le
site du projet des registres de la Comédie-
Française](http://cfregisters.org/fr/nos-donn%C3%A9es)), comme le cadre d’une
photographie découpe dans le réel un objet qu’il immobilise
intentionnellement.

Distinguons encore dans l’archive, comme Barthes dans la photographie, un
_studium_ et un _punctum_. “Le premier, visiblement, est une étendue, il a
l’extension d’un champ, que je perçois assez familièrement en fonction de mon
savoir, de ma culture (...). C’est par le _studium_ que je m’intéresse à
beaucoup de photographies, soit que je les reçoive comme des témoignages
politiques, soit que je les goûte comme de bons tableaux
historiques”[5](»#fn5″). Tel serait le premier sentiment donné par l’archive,
ce mouvement initial de notre conscience qui en l’occurrence, consisterait à
tenter de replacer les registres dans leur contexte historique : Louis XIV et
les divertissements de cour, les Lumières et le siècle du libertinage, les
aléas financiers de la Comédie-Française pendant la Révolution, etc.

“Le second élément vient casser (ou scander) le _studium_. Cette fois, ce
n’est pas moi qui vais le chercher (...), c’est lui qui part de la scène,
comme une flèche, et vient me percer. Un mot existe en latin pour désigner
cette blessure, cette piqûre, cette marque faite par un instrument pointu :
(...) précisément ces marques, ces blessures sont des points. Ce second
élément, je l’appellerai donc _punctum_ ; (...) Le _punctum_ d’une photo,
c’est ce hasard qui, en elle, _me point_ (mais aussi, me meurtrit, me
poigne).”[6](»#fn6″) Les registres de la Comédie-Française sont-ils mouchetés
de ces points perçants la subjectivité de celui qui les parcourt ? En tous les
cas, Arlette Farge distinguait bien dans l’archive ces occurrences
“émotionnellement prenantes”, qu’il s’agisse d’une lettre d’un amant
embastillé écrite sur un chiffon, ou bien encore de “graines ensoleillées”
prétendument sorties de la poitrine miraculeuse d’une jeune femme au moment de
ses menstrues [7](»#fn7″) .

Si l’archive peut de la sorte être rapprochée de la photographie, peut-on voir
en la visualisation des données issues des registres le même geste que celui
de l’opérateur chargé de développer un négatif, ouvrant la possibilité, par
l’interprétation chimique qu’il donne de ce dernier, d’une lecture studieuse
tout autant que d’un saisissement de la subjectivité du spectateur ?

La tâche paraît vouée à l’échec : il s’agirait en effet de faire cohabiter un
dispositif capable de donner la mesure historique des registres, tout en
laissant la possibilité au détail de “surgir”, cela sur un petit écran
d’ordinateur.

Probablement l’enchâssement des représentations décrit plus haut relève bien
du sage _studium_ dans sa volonté de mettre en parallèle un temps long d’un
siècle et demi avec un temps plus court d’une année de programmation. Pour
autant, il n’a pas été permis d’y déceler la “vivacité” de sa source
archivistique, probablement filtrée à la fois par la saisie informatique des
données et par l’adoption du tableau pour les représenter.

La réponse à ce problème, si l’on en suit encore Roland Barthes, serait alors
à chercher dans le théâtre plus que dans le tableau : “ce n’est pourtant pas
(me semble-t-il) par la Peinture que la Photographie touche à l’art, c’est par
le Théâtre.” [8](»#fn8″)

Dans un article consacré aux comédies-ballets de Molière[9](»#fn9″), Stephen
H. Fleck semble définir trois lectures par lequel le dramaturge animait la
représentation théâtrale tout en la dépassant. Un premier niveau “mimétique”
donnait à voir par l’intrigue et le décor un intérieur bourgeois mortifère,
progressivement tourné en dérision par l’introduction d’un second niveau
ludique. Il s’agissait en effet des festivités chorégraphiées et mises en
musique du ballet, dont les proportions de plus en plus importantes
finissaient par dissoudre l’intrigue et faire apparaître ce qui semblait être
le véritable sujet de la pièce, à savoir la métamorphose joyeuse d’un
personnage principal emporté par sa folie : “ainsi, un bourgeois désirant
devenir gentilhomme deviendra noble au-delà de ses fantaisies les plus
grandioses. De même, la maison d’Argan sera abruptement envahie par les amis
masqués de Béralde, pour être reconvertie en lieu de festivité
carnavalesque”[10](»#fn10″). Cette métamorphose du personnage représente
finalement un troisième niveau, que l’on peut qualifier de “spectaculaire”, et
c’est précisément par le “spectacle” que l’on pourrait redonner vie à la
représentation classique.

On peut de la sorte essayer de rompre l’immobilité du tableau graphique en
introduisant cette dimension carnavalesque : les couleurs vives et contrastées
utilisées pour démarquer les genres des pièces et des auteurs encadrant les
saisons de la comédie-française peuvent y participer. En outre, ce qui au
départ relevait d’une réponse à une contrainte spatiale, à savoir la
disposition sur chacun des côtés du tableau des auteurs et des pièces
constituant son repère orthonormée, là où une représentation classique se
serait contentée de deux lignes perpendiculaires sur un côté du rectangle,
pourrait être lu comme un damier appelant au jeu.

Mais au-delà de la dimension ludique, mon projet était de faire en sorte que
de petits signes disposés sagement sur un écran d’ordinateur puissent, par le
biais d’une simple animation, jouer à être autre chose que ce qu’ils sont, à
savoir des points dans un repère orthonormé : de là vient que j’ai voulu
imprimer un léger mouvement ascendant pour animer la chronologie des auteurs
apparaissant lorsque l’on clique sur une année. Il s’agissait de les faire
apparaître tels des papillons s’échappant en une floppée linéaire d’une page
d’où ils auraient été figés, simulant ainsi l’envolée parodique des grands
hommes du théâtre vers un firmament panthéonique, et ouvrant par leur
mouvement ce “champ” illimité et silencieux du _punctum_ qui me semblait si
cruellement faire défaut dans mon dispositif initial.

A bien y regarder, il semble pourtant que ces petits signes ont peine à se
hisser dans le ciel calme de l’estampe de Yoshida Komagatake : je n’ai pas eu
le temps de terminer et en l’état, l’animation ne fonctionne que
partiellement.

Une erreur de ma part m’a fait perdre ce temps précieux, à savoir
l’impossibilité qui était la mienne de me résoudre à ne plus représenter
l’exhaustivité des auteurs et des pièces citées dans les registre, afin que le
résultat reste lisible et exploitable. A cela s’ajoute le fait que j’ai
souhaité profiter de l’occasion pour apprendre à maîtriser une nouvelle
bibliothèque de visualisation, processing.js, en lieu et place de celle dont
je me servais habituellement, ce afin de disposer, me semble-t-il, de
davantage de liberté dans la disposition graphique et de ne pas me reposer sur
les modèles préexistants fournis par d3.js.

Il reste la sensation d’être passée à côté des registres. Ce corps à corps
avec l’archive, qui laisse l’impression d’avoir visité pour un temps un autre
pays, a été remplacé par un corps à corps avec la programmation informatique.
Mais peut-être le _punctum_ , la blessure émouvante de ce projet réside-t-elle
dans la trace de cette lutte avec la technologie, que rend visible le
fonctionnement maladroit et imparfait de l'animation ? Il reviendra aux
lecteurs d’en juger.

### Notes

1\. FOUCAULT, Michel, 1994. _Les mots et les choses : une archéologie des
sciences humaines_. Paris : Gallimard. Bibliothèque des sciences humaines.

2\. CORNEILLE, Pierre, 2000. _L’illusion comique_. Paris : Gallimard.
Collection Folio.

3\. FARGE, Arlette, 1989. _Le Goût de l’archive_. Paris : Éd. du Seuil. La
Librairie du XXe siècle. p.12.

4\. BARTHES, Roland, 1980. _La chambre claire : note sur la photographie_.
Paris : « Cahiers du cinéma » Gallimard Seuil.

5\. _Ibidem_. p. 47.

6\. _Ibidem_. pp. 48-49.

7\. FARGE, _Ibidem_. p. 15.

8\. BARTHES, _Ibidem_. p. 55.

9\. ZAISER, Rainer (1955- ) et CENTRE INTERNATIONAL DE RENCONTRES SUR LE XVIIE
SIÈCLE. _L’âge de la représentation : l’art du spectacle au XVIIe siècle :
actes IXe colloque du Centre international de Rencontres sur le XVIIe siècle,
Kiel, 16-18 mars 2006_. Actes de colloque édités par Rainer Zaiser, 2007.

10\. _Ibidem_. p. 201.
