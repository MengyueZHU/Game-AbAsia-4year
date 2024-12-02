// 问题数据
const QuestionInfo = [
    {
        question: "In which year was AbAsia BioLabs established?",
        option: [
            "2000",
            "2017",
            "2020",
            "2024"
        ],
        answer: "2020",
        explanation: "AbAsia BioLabs was founded in 2020 during the COVID pandemic, marking our entry into Singapore's biotechnology industry.",
        optionIsImage: false
    },
    {
        question: "Which of the following is AbAsia's logo?",
        option: [
            "images/img-1.png",
            "images/img-2.png",
            "images/img-3.png",
            "images/img-4.png"
        ],
        answer: "images/img-1.png",
        explanation: "The sunbird represents our Singapore roots as it is our country's unofficial national bird.",
        optionIsImage: true
    },
    {
        question: `Why was the name "AbAsia" chosen for the company?`,
        option: [
            `To reflect our ambition to be Asia's number one antibody supplier.`,
            `We would appear earlier in any alphabetically ordered list.`,
            `We are the Asian subsidiary of AbEarth.`,
            `Because we love Asia!`
        ],
        answer: "To reflect our ambition to be Asia's number one antibody supplier.",
        explanation: `The short form for antibody is "Ab". Hence we merged Antibody + Asia = Ab + Asia = AbAsia and named our company, AbAsia BioLabs.`,
        optionIsImage: false
    },
    {
        question: "What products or services do we currently offer?",
        option: [
            "PCR Reagents",
            "Antibody Products",
            "Protein Expression Services",
            "All of the above"
        ],
        answer: "All of the above",
        explanation: "AbAsia BioLabs provides a wide range of products and services, including PCR reagents, antibody products, and custom services like antibody generation, nanobody library screening and protein purification.",
        optionIsImage: false
    },
    {
        question: "True or False: If you need to produce a protein for target screening and are too busy to do so, AbAsia can produce this protein for you.",
        option: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "We can help you make your protein through our custom protein service. For larger orders, we can even customize our catalogue product formulation to your specifications.",
        optionIsImage: false
    },
    {
        question: "Which of the following is our company mission?",
        option: [
            "To become the number one diagnostic kit developer",
            "To discover high quality, reliable and innovative reagents for reproducible scientific research",
            "To solve the global energy crisis",
            "To produce cutting edge vaccines"
        ],
        answer: "To discover high quality, reliable and innovative reagents for reproducible scientific research",
        explanation: "Our founders have experienced the joy of working with reliable, high-quality antibodies and reagents for their research and are passionate about sharing these resources with the world. These reagents will in turn enable more reproducible data, enhancing scientific progress throughout the world.",
        optionIsImage: false
    },
    {
        question: "Where is AbAsia BioLabs headquartered?",
        option: [
            "United Kingdom",
            "Singapore",
            "United States",
            "China"
        ],
        answer: "Singapore",
        explanation: "AbAsia BioLabs is founded and located in Singapore, strategically positioned to serve the growing Asia biotech industry.",
        optionIsImage: false
    },
    {
        question: "What new product line has AbAsia BioLabs added in 2024?",
        option: [
            "Therapeutic antibodies",
            "Nanobodies",
            "Gene editing tools",
            "Diagnostic kits"
        ],
        answer: "Nanobodies",
        explanation: "In 2024, AbAsia BioLabs expanded its product line by adding specialized antibodies called nanobodies raised from the bamboo shark. Soon, we will bring more types like single chain fragment variable(scfv) antibodies.",
        optionIsImage: false
    },
    {
        question: "Who is one of the co-founders of AbAsia BioLabs?",
        option: [
            "Prof. Sir David Lane",
            "Prof. Ashok Venkitaraman",
            "Sir Tom Blundell",
            "Prof. Arnold Levine"
        ],
        answer: "Prof. Sir David Lane",
        explanation: "Prof. Sir David Lane is one of our co-founders and a renowned cancer scientist. He discovered the p53 protein in 1979, and is firm friends with Prof. Arnold Levine, whose team also independently discovered p53. Antibodies have been a life-long love for Prof. Sir David as evidenced by his co-authorship of the successful handbook, “Antibodies”, published by Cold Spring Harbor Press.",
        optionIsImage: false
    },
    {
        question: "What sort of enzymes can you obtain from AbAsia BioLabs?",
        option: [
            "Restriction digest enzymes e.g. BamHI",
            "PCR-related enzymes e.g. hot-start Taq polymerase",
            "Proteases e.g. TEV",
            "Amylases e.g. alpha-amylase"
        ],
        answer: "PCR-related enzymes",
        explanation: "AbAsia BioLabs produces medical device grade PCR enzymes and PCR-related reagents. We can also make your custom protein including proteases and antibodies on request.",
        optionIsImage: false
    },
    {
        question: "Does AbAsia produce an all-in-one PCR kit suitable for animal genotyping?",
        option: [
            "Yes, it's our AbTaq Genotyping Kit (Hot Start)",
            "No, who needs that anyway?"
        ],
        answer: "Yes, it's our AbTaq Genotyping Kit (Hot Start)",
        explanation: "Genotype your animal with ease using our AbTaq Genotyping Kit. After a single-step lysis of the tissue, load the lysate directly into our 2x PCR master mix. Your sample will be ready for gel loading once the PCR run is complete.",
        optionIsImage: false
    }
];

const questionContainer = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const submitButton = document.querySelector('#submit');
const previousButton = document.querySelector('#previous');
const progressBar = document.querySelector('#progressBar');
const progressImage = document.querySelector('#progressImage'); // 进度条上的图片

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionData = QuestionInfo[currentQuestionIndex];
    questionContainer.textContent = questionData.question;
    optionsContainer.innerHTML = '';

    questionData.option.forEach((option, index) => {
        const optionWrapper = document.createElement('div');
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = 'option';
        optionInput.value = option;
        optionInput.id = `option${index}`;

        const optionLabel = document.createElement('label');
        optionLabel.htmlFor = `option${index}`;
        if (questionData.optionIsImage) {
            const img = document.createElement('img');
            img.src = option;
            img.width = 100;
            img.height = 100;
            optionLabel.appendChild(img);
        } else {
            optionLabel.textContent = option;
        }

        optionWrapper.appendChild(optionInput);
        optionWrapper.appendChild(optionLabel);
        optionsContainer.appendChild(optionWrapper);
    });
    progressBar.value = currentQuestionIndex + 1;

    // 更新进度图片的位置
    updateProgressImagePosition();
}

function updateProgressImagePosition() {
    const progressPercentage = (currentQuestionIndex + 1) / progressBar.max;
    const progressBarWidth = progressBar.clientWidth;
    const imagePosition = progressPercentage * progressBarWidth;
    
    // 更新图片的位置
    progressImage.style.left = `${imagePosition - progressImage.clientWidth / 2}px`;
}

function showFeedback(isCorrect, explanation) {
    const title = isCorrect ? 'Correct!' : 'Incorrect!';
    const icon = isCorrect ? 'success' : 'error';

    Swal.fire({
        title,
        text: explanation,
        icon,
        width: '80%', // 弹窗宽度为屏幕宽度的 80%
        confirmButtonText: 'Next',
        customClass: {
            popup: 'swal-custom-popup',      // 弹窗主体自定义类
            title: 'swal-custom-title',      // 标题自定义类
            htmlContainer: 'swal-custom-text', // 内容文字自定义类
            confirmButton: 'swal-custom-button' // 按钮自定义类
        }
    }).then(() => {
        if (currentQuestionIndex < QuestionInfo.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            localStorage.setItem("game1Completed", "true");
            
            Swal.fire({
                title: 'Congratulations!',
                html: '<p>You have completed AbAsia 101!</p><p>Fill out the form for an additional lottery chance.</p>',
                icon: 'success',
                width: '80%',
                showCancelButton: true,
                confirmButtonText: 'Back to Main Page',
                cancelButtonText: 'Fill Out Form',
                customClass: {
                    popup: 'swal-custom-popup',
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    confirmButton: 'swal-custom-button',
                    cancelButton: 'swal-custom-button'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    // 如果选择了 “Back to Main Page”，跳转回主页面
                    window.location.href = "../mainpage.html";
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    // 如果选择了 “Fill Out Form”，显示表单
                    document.querySelector('.container').style.display = 'none';
                    document.getElementById('form-container').style.display = 'block';
                }
            });
        }
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        Swal.fire('No Option Selected!', 'Please select an option.', 'warning');
        return;
    }
    const isCorrect = selectedOption.value === QuestionInfo[currentQuestionIndex].answer;
    showFeedback(isCorrect, QuestionInfo[currentQuestionIndex].explanation);
}

submitButton.addEventListener('click', checkAnswer);
previousButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

function goToMainPage() {
    window.location.href = "../mainpage.html"; // 请确认路径是否正确
}

loadQuestion();