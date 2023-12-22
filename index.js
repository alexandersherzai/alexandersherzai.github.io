window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() { 
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const projects = {
    neurospect: {
        title: "Neurospect: A 3-stage cognitive assessment tool",
        description: "Developed a game in ReactJS which measures Attention, Processing Speed, Visuospatial Ability, and Short-Term Memory",
        image: 'images/Logo.png',
        links: {
            Github: 'github.com/alexsherzai/NeuroSpectReact'
        }
    },
    ppp: {
        title: "Analysis of Loans From the Paycheck Protection Program Within the City of Los Angeles",
        description: "We conducted an analysis of businesses in Los Angeles County and the relationship between different demographics and the distribution of PPP Loans.",
        image: 'images/PPPLoans.png',
        links: {}
    }
}

research_row = document.getElementById("research-cont");

for(var i = 0; i < Object.keys(projects).length; i++) {
    var row = document.createElement("div");
    row.className = "row";
    row.style = "padding: 15px;";

    var imageCol = document.createElement("div");
    imageCol.className = "col";

    var textCol = document.createElement("div");
    textCol.className = "col";
    var title = document.createElement("h1");
    title.textContent = projects[Object.keys(projects)[i]].title;
    var description = document.createElement("h5");
    description.textContent = projects[Object.keys(projects)[i]].description;
    textCol.appendChild(title);
    textCol.appendChild(description);

    var buttonRow = document.createElement("div");
    buttonRow.className = "row mt-4 ml-1";

    /* for(var j = 0; j < Object.keys(projects[Object.keys(projects)[i]].links).length; j++) {
        var link = document.createElement("a");
        var linkBtn = document.createElement("button");
        linkBtn.className = "btn btn-outline-info";
        linkBtn.textContent = Object.keys(projects[Object.keys(projects)[i]].links);

        link.href = Object.keys(projects[Object.keys(projects)[i]].links).Github;

        link.appendChild(linkBtn);

        buttonRow.appendChild(link);
    } */

    textCol.appendChild(buttonRow);

    var imageSrc = document.createElement("img");
    imageSrc.src = projects[Object.keys(projects)[i]].image;
    imageSrc.style = "width: 80%";

    imageCol.appendChild(imageSrc);
    row.appendChild(imageCol);
    row.appendChild(textCol);
    research_row.appendChild(row);
}