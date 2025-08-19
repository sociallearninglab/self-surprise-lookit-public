function generateProtocol(child, pastSessions) {
    const options = ['surprising', 'unsurprising'];
    const condition = options[Math.floor(Math.random() * options.length)];
    console.log('Condition:', condition);

    // coin flip for counterbalancing resp. options
    const isFlipped = Math.random() < 0.5;
    console.log('isFlipped:', isFlipped);

    // parent text block
    const parentTextBlock = {
        'text': '<b>FOR PARENTS</b>: Please let your children make their own choices! You can replay the prompt or help to control the mouse, but please do not choose for them. Click NEXT when prompted.',
        'fontSize': 'small',
        'css': {
            'background-color': '#f8f3bf',
            'width': '50vw',
            'height': '16vh',
            'margin': 'auto',
            'bottom': '2vh',
            'right': '0',
            'left': '0',
            'position': 'fixed',
            'padding': '10px 25px',
            'text-align': 'center',
            'display': 'table-cell',
            'vertical-align': 'middle',
            'border-radius': '15px'
        }
    };
    
    // base frames
    const baseFrames = {
        'welcome': {
            'kind': 'exp-lookit-text',
            'blocks': [{
                'title': 'Welcome!'
            }, {
                'text': 'Thank you for your interest in our study, \'Let\'s Play With Cards!\''
            }, {
                'text': 'Here\'s a quick summary of what\'s about to happen:'
            }, {
                'text': '1. Webcam Setup and Video Consent: First, we\'ll be checking that your webcam is working. Then you and your child will give your consent to participate in this research.'
            }, {
                'text': '2. Start the Study: When you click the \'Start the game!\' button, the study will begin! This study will take about 10 minutes in total.'
            }, {
                'text': 'Thank you so much for helping us with our science! We hope you have fun.'
            }],
            'showPreviousButton': false
        },
        'video-config': {
            'kind': 'exp-video-config',
            'troubleshootingIntro': 'If you\'re having any trouble getting your webcam set up, please feel free to call the Social Learning Lab at (650) 498-7832 and we\'d be glad to help you out!'
        },
        'video-consent': {
            "gdpr": false,
            'kind': 'exp-lookit-video-consent',
            'template': 'consent_005',
            'PIName': 'Adani Abutto',
            'institution': 'Stanford University',
            'PIContact': 'Adani Abutto (sll_lookit@stanford.edu)',
            'purpose': 'Starting in their earliest childhood years, learners routinely experience their actions leading to unexpected outcomes. Achieving things outside of one’s expectations is a curiosity-inducing, joyful learning experience; it results in surprise and can spur learners on to further explore how they did it, and what else they may be able to do in the world.  We aim to investigate whether children early in development are sensitive and responsive to such experiences, and how they can be elicited reliably.',
            'procedures': 'In this study, your child will play a simple card game! In this game, your child will learn about the cards, make some choices while playing with the cards, and then answer a few short questions. This study has been designed to be fun and appropriate for young children.',
            'risk_statement': 'There are no expected risks if you participate in the study.',
            'voluntary_participation': 'Participation in this study is entirely optional, and you are free to exit at any time.',
            'payment': 'There are no costs to participating. There are also no known risks associated with this study beyond those of everyday life. Although this study will not benefit your child directly, it will add to our understanding of how children think in general. If indicated in the study description, you may be compensated for participating in this study; if this is not stated in the study description, then you will not receive any payment for your participation.',
            'datause': 'The researchers and study staff follow federal and state laws to protect your privacy, so all of your information and research records will be kept confidential. The only exception to these procedures for maintaining confidentiality is that we are required by law to report to the appropriate authorities suspicion of harm to your child or to others. More information on how we keep your videos and data private can be found at lookit.mit.edu/faq.',
            'research_rights_statement': 'The Institutional Review Board (IRB) of Stanford University has approved this research study. If you have questions regarding your rights as a research subject you may contact the IRB office at 650-723-2480, or by mail at Research Compliance Office, Stanford University, 1705 El Camino Real, Palo Alto, CA 94306.'
        },
        'positioning': {
            'kind': 'exp-video-config-quality',
            'title': 'Positioning',
            'introText': 'It\'s time to get your child & check yourself out!',
            'showRecordMenu': false,
            'requireTestVideo': false,
            'completedItemText': 'Got it!',
            'instructionBlocks': [{
                'text': 'You and your child can sit in any position.',
                'title': 'Get comfortable'
            }, {
                'text': 'Go ahead and get settled and use the webcam preview to make sure your child\'s whole face and torso are in view.',
                'title': 'Take a few moments'
            }, {
                'text': 'Press the \'Next\' button down below if you and your child are in position and ready to go.',
                'title': 'When you\'re ready'
            }],
            'nextButtonText': 'My child and I are in position and ready to start!',
            'showPreviousButton': true,
            'requireItemConfirmation': true,
            'recordingInstructionText': ''
        },
        'start-recording': {
            'kind': 'exp-lookit-start-recording',
            'imageAnimation': 'spin',
            'displayFullscreen': true
        },
        'stop-recording': {
            'kind': 'exp-lookit-stop-recording',
            'imageAnimation': 'spin',
            'displayFullscreen': true
        },
        'email-survey': {
            'kind': 'exp-lookit-survey',
            'formSchema': {
                'schema': {
                    'type': 'object',
                    'title': 'Thank you for your participation! Please provide your email for study compensation. Your email will only be used for compensation and nothing else.',
                    'properties': {
                        'Email': {
                            'type': 'string',
                            'title': 'Email',
                            'required': true
                        }
                    }
                }
            },
            'nextButtonText': 'Continue'
        },
        "exit-survey": {
            "kind": "exp-lookit-exit-survey",
            "debriefing": {
                "title": "Thank you for participating!",
                "blocks": [{
                    "title": "",
                    "text": "This research wouldn't be possible without awesome parents like you."
                }, {
                    "title": "Some Background Information:",
                    "text": "Children begin as universal novices; once they start taking action in the world, they start experiencing success on tasks they did not know they could succeed on (e.g., tying their shoes by themselves for the first time, or getting a “lucky draw” in a game). Such experiences are joyful and surprising. Here, we investigate how we can bring about such experiences of “self-surprise,” and how they relate to learners’ later exploration of their capabilities. This study will help us understand what sparks children’s surprise and enhances their desire to continue learning about themselves and the world. "
                }, {
                    "title": "Additional Resources:",
                    "text": "To learn more about this topic, you can check out some of the following works and resources:<br><a href='https://www.youtube.com/watch?v=y1KIVZw7Jxk' target='_blank'>TED Talk by Laura Schulz: The surprisingly logical minds of babies </a><br><a href='https://www.youtube.com/watch?v=muUbUspLgJ8' target='_blank'> Science, problem solving and play - Sara Baker</a>"
                }, {
                    "title": "Compensation:",
                    "text": "To thank you for your participation, we'll be emailing you a $5 USD Amazon gift card - this should arrive in your inbox within the next week after we confirm your consent video and check that your child is in the age range for this study (If you don't hear from us by then, feel free to reach out!). If you participate again with another child in the age range, you'll receive one gift card per child."
                }, {
                    "title": "Questions or Concerns:",
                    "text": "Please do not hesitate to contact Adani Abutto at aabutto@stanford.edu"
                }]
            }
        }
    };

    if (condition === 'surprising') {
        const frames = {
            ...baseFrames,
            'welcome-to-my-game': {
                'kind': 'exp-lookit-video',
                'video': { 'source': 'background_welcome' },
                'backgroundColor': 'black',
                'autoProceed': false,
                'parentTextBlock': parentTextBlock,
                'doRecording': false,
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'videoTypes': ['mp4']
            },
            'minority-intro': {
                'kind': 'exp-lookit-video',
                'video': { 'source': 'game_intro_1' },
                'backgroundColor': 'black',
                'autoProceed': true,
                'parentTextBlock': parentTextBlock,
                'doRecording': false,
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'videoTypes': ['mp4']
            },
            'minority-test-win': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function() { let images = []; const centerOffset = 15; const spacing = 50; images.push({ id: "star", src: "card_star.png", left: centerOffset, top: 30, width: 15, height: 35, correct: true, feedbackAudio: "control_question_correct" }); images.push({ id: "dash", src: "card_dash.png", left: centerOffset + spacing, top: 30, width: 15, height: 35, correct: false, feedbackAudio: "control_question_incorrect" }); return { images: images }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audio': 'control_question',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'correctChoice': 'star',
                'correctChoiceRequired': true,
                'feedbackAudio': true,
                'nextButtonDelay': 'feedbackAudioEnd',
                'parentTextBlock': parentTextBlock,
                'highlights': [
                    { 'range': [8, 10], 'imageId': 'star', 'color': 'blue' },
                    { 'range': [13, 15], 'imageId': 'dash', 'color': 'blue' }
                ]
            },
            'minority-intro-2-surprising': {
                'kind': 'exp-lookit-video',
                'video': { 'source': 'game_intro_2_surprising' },
                'backgroundColor': 'black',
                'autoProceed': false,
                'doRecording': false,
                'parentTextBlock': parentTextBlock,
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'videoTypes': ['mp4']
            },
            'minority-select-1': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function() { const cardWidth = 12; const cardHeight = 28; const cardsPerRow = 5; const horizontalSpacing = 14; const verticalSpacing = 32; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const startLeft = (100 - totalWidth) / 2; const startTop = 5; let images = []; for (let i = 0; i < 15; i++) { const row = Math.floor(i / cardsPerRow); const col = i % cardsPerRow; images.push({ id: String(i + 1), src: "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, feedbackAudio: "cards_selection_picknext" }); } return { images: images, audio: "threecards_picking_first" }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'feedbackAudio': true,
                'waitForEndAudio': true,
                'parentTextBlock': parentTextBlock
            },
            'minority-select-2': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function(expData, sequence) { const cardWidth = 12; const cardHeight = 28; const cardsPerRow = 5; const horizontalSpacing = 14; const verticalSpacing = 32; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const startLeft = (100 - totalWidth) / 2; const startTop = 5; const firstFrameId = sequence[sequence.length - 1]; const clickEvents = expData[firstFrameId]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const lastSelection = clickEvents[clickEvents.length - 1]?.imageId; let images = []; for (let i = 0; i < 15; i++) { const cardNum = String(i + 1); const isSelected = cardNum === lastSelection; images.push({ id: cardNum, src: isSelected ? "card_back_selected.png" : "card_back.png", left: startLeft + ((i % cardsPerRow) * horizontalSpacing), top: startTop + (Math.floor(i / cardsPerRow) * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: isSelected, feedbackAudio: "cards_selection_picknext" }); } return { images: images, audio: "cards_selection_picksecond" }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'feedbackAudio': true,
                'waitForEndAudio': true,
                'parentTextBlock': parentTextBlock
            },
            'minority-select-3': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function(expData, sequence) { const cardWidth = 12; const cardHeight = 28; const cardsPerRow = 5; const horizontalSpacing = 14; const verticalSpacing = 32; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const startLeft = (100 - totalWidth) / 2; const startTop = 5; const frame1Id = sequence[sequence.length - 2]; const frame2Id = sequence[sequence.length - 1]; const clickEvents1 = expData[frame1Id]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const clickEvents2 = expData[frame2Id]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const selection1 = clickEvents1[clickEvents1.length - 1]?.imageId; const selection2 = clickEvents2[clickEvents2.length - 1]?.imageId; let images = []; for (let i = 0; i < 15; i++) { const cardNum = String(i + 1); const isPreviouslySelected = cardNum === selection1 || cardNum === selection2; images.push({ id: cardNum, src: isPreviouslySelected ? "card_back_selected.png" : "card_back.png", left: startLeft + ((i % cardsPerRow) * horizontalSpacing), top: startTop + (Math.floor(i / cardsPerRow) * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: isPreviouslySelected, feedbackAudio: "cards_selection_okay" }); } return { images: images, audio: "cards_selection_picklast" }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'feedbackAudio': true,
                'waitForEndAudio': true,
                'parentTextBlock': parentTextBlock
            },
            'minority-select-3-combined': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function(expData, sequence) { const cardWidth = 12; const cardHeight = 28; const cardsPerRow = 5; const horizontalSpacing = 14; const verticalSpacing = 32; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const startLeft = (100 - totalWidth) / 2; const startTop = 5; const frame1Id = sequence[sequence.length - 3]; const frame2Id = sequence[sequence.length - 2]; const frame3Id = sequence[sequence.length - 1]; const clickEvents1 = expData[frame1Id]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const clickEvents2 = expData[frame2Id]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const clickEvents3 = expData[frame3Id]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const selection1 = clickEvents1[clickEvents1.length - 1]?.imageId; const selection2 = clickEvents2[clickEvents2.length - 1]?.imageId; const selection3 = clickEvents3[clickEvents3.length - 1]?.imageId; let images = []; for (let i = 0; i < 15; i++) { const cardNum = String(i + 1); const isPreviouslySelected = cardNum === selection1 || cardNum === selection2 || cardNum === selection3; images.push({ id: cardNum, src: isPreviouslySelected ? "card_back_selected.png" : "card_back.png", left: startLeft + ((i % cardsPerRow) * horizontalSpacing), top: startTop + (Math.floor(i / cardsPerRow) * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images, audio: "stars_prereveal_question" }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': false,
                'waitForEndAudio': true,
                'autoProceed': false,
                'parentTextBlock': parentTextBlock
            },
            'minority-prediction-question': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': `function() {
                    const baseOptions = [
                        { id: "three_stars", src: "three_stars.png", feedbackAudio: "prereveal_threestars" },
                        { id: "two_stars", src: "two_stars.png", feedbackAudio: "prereveal_twostars" },
                        { id: "one_star", src: "one_star.png", feedbackAudio: "prereveal_onestar" },
                        { id: "all_dash", src: "all_dash.png", feedbackAudio: "prereveal_nostars" }
                    ];
                    const baseHighlights = [
                        { 'range': [2.75, 4], 'color': 'yellow' },
                        { 'range': [4, 5.25], 'color': 'yellow' },
                        { 'range': [5.25, 6.5], 'color': 'yellow' },
                        { 'range': [6.5, 7.75], 'color': 'yellow' }
                    ];
                    const orderedOptions = ${isFlipped} ? [...baseOptions].reverse() : baseOptions;
                    const ratingWidth = 20; const ratingHeight = 35; const ratingY = 30; const spacing = 5;
                    const startX = (100 - (4 * ratingWidth + 3 * spacing)) / 2;
                    let images = orderedOptions.map((option, index) => ({ ...option, left: startX + index * (ratingWidth + spacing), top: ratingY, width: ratingWidth, height: ratingHeight }));
                    const audio = ${isFlipped} ? 'stars_prereveal_prediction_flipped' : 'stars_prereveal_prediction';
                    const highlights = baseHighlights.map((highlight, index) => ({ ...highlight, imageId: orderedOptions[index].id }));
                    return { images: images, audio: audio, highlights: highlights };
                }`,
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'waitForEndAudio': true,
                'feedbackAudio': true,
                'parentTextBlock': parentTextBlock
            },
            'minority-prediction-reveal-transition': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function() { return { images: [], audio: "cards_selection_alldone" }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': false,
                'waitForEndAudio': true,
                'durationSeconds': 3,
                'parentTextBlock': parentTextBlock
            },
            'minority-reveal-stars-surprising': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function(expData, sequence) { const cardWidth = 12; const cardHeight = 28; const cardsPerRow = 5; const horizontalSpacing = 14; const verticalSpacing = 32; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const startLeft = (100 - totalWidth) / 2; const startTop = 5; const frameIds = [sequence[sequence.length - 6], sequence[sequence.length - 5], sequence[sequence.length - 4]]; const selections = frameIds.map(frameId => { const clickEvents = expData[frameId]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; return clickEvents[clickEvents.length - 1]?.imageId; }).filter(id => id !== undefined); let images = []; for (let i = 0; i < 15; i++) { const cardNum = String(i + 1); const isSelected = selections.includes(cardNum); images.push({ id: cardNum, src: isSelected ? "card_star.png" : "card_back.png", left: startLeft + ((i % cardsPerRow) * horizontalSpacing), top: startTop + (Math.floor(i / cardsPerRow) * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audio': 'cards_selection_reveal',
                'waitForEndAudio': true,
                'autoProceed': false,
                'durationSeconds': 10,
                'parentTextBlock': parentTextBlock
            },
            'surprise-rating-yes-no-surprising': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': `function() {
                    let images = [{ id: "topImage", src: "selection_three_stars.png", left: 15, top: 0, width: 70, height: 45, nonChoiceOption: true }];
                    const baseOptions = [
                        { id: "surprised", src: "surprise_scale_a_little_surprised.png", feedbackAudio: "surprised" },
                        { id: "not_surprised", src: "surprise_scale_not_surprised.png", feedbackAudio: "not_surprised" }
                    ];
                    const baseHighlights = [ { 'range': [5, 7], 'color': 'yellow' }, { 'range': [7, 9], 'color': 'yellow' } ];
                    const orderedOptions = ${isFlipped} ? [...baseOptions].reverse() : baseOptions;
                    const ratingWidth = 25; const ratingHeight = 40; const ratingY = 50; const spacing = 20;
                    const startX = (100 - (2 * ratingWidth + spacing)) / 2;
                    orderedOptions.forEach((option, index) => {
                        images.push({ ...option, left: startX + index * (ratingWidth + spacing), top: ratingY, width: ratingWidth, height: ratingHeight });
                    });
                    const highlights = baseHighlights.map((highlight, index) => ({ ...highlight, imageId: orderedOptions[index].id }));
                    const audio = ${isFlipped} ? 'allthreestars_surprise_scale_flipped' : 'allthreestars_surprise_scale';
                    return { images: images, highlights: highlights };
                }`,
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'waitForEndAudio': true,
                'feedbackAudio': true,
                'parentTextBlock': parentTextBlock,
                'selectNextFrame': 'function(frames, frameIndex, frameData) { return frameData.selectedImage === "not_surprised" ? frameIndex + 2 : frameIndex + 1; }'
            },
            'surprise-rating-graded-unsurprising': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': `function(expData, sequence) {
                    const markedPositions = [[0, 2], [1, 0], [2, 4]]; const cardsPerRow = 5;
                    const frameIds = [sequence[sequence.length - 8], sequence[sequence.length - 7], sequence[sequence.length - 6]];
                    const selections = frameIds.map(frameId => { const clickEvents = expData[frameId]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; return clickEvents.length > 0 ? clickEvents[clickEvents.length - 1].imageId : undefined; }).filter(id => id !== undefined);
                    const correctSelections = selections.filter(selection => { const pos = parseInt(selection) - 1; const row = Math.floor(pos / cardsPerRow); const col = pos % cardsPerRow; return markedPositions.some(markedPos => markedPos[0] === row && markedPos[1] === col); }).length;
                    
                    let topImageFile;
                    let audioPrefix;
                    if (correctSelections === 3) { topImageFile = "selection_three_stars.png"; audioPrefix = "threestars"; }
                    else if (correctSelections === 2) { topImageFile = "two_stars.png"; audioPrefix = "twostars"; }
                    else if (correctSelections === 1) { topImageFile = "one_star.png"; audioPrefix = "onestar"; }
                    else { topImageFile = "all_dash.png"; audioPrefix = "nostars"; }

                    const baseOptions = [
                        { id: "a_little_surprised", src: "surprise_scale_a_little_surprised.png", feedbackAudio: "a_little_surprised" },
                        { id: "pretty_surprised", src: "surprise_scale_somewhat_surprised.png", feedbackAudio: "pretty_surprised" },
                        { id: "very_surprised", src: "surprise_scale_very_surprised.png", feedbackAudio: "very_surprised" }
                    ];
                    const baseHighlights = [ { 'range': [4, 6], 'color': 'yellow' }, { 'range': [6, 8], 'color': 'yellow' }, { 'range': [8, 10], 'color': 'yellow' } ];
                    const orderedOptions = ${isFlipped} ? [...baseOptions].reverse() : baseOptions;
                    
                    let images = [{ id: "topImage", src: topImageFile, left: 15, top: 0, width: 70, height: 45, nonChoiceOption: true }];
                    const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const spacing = 10;
                    const startX = (100 - (3 * ratingWidth + 2 * spacing)) / 2;
                    orderedOptions.forEach((option, index) => {
                        images.push({ ...option, left: startX + index * (ratingWidth + spacing), top: ratingY, width: ratingWidth, height: ratingHeight });
                    });
                    
                    const audioFile = ${isFlipped} ? audioPrefix + "_surprised_followup_flipped" : audioPrefix + "_surprised_followup";
                    const highlights = baseHighlights.map((highlight, index) => ({ ...highlight, imageId: orderedOptions[index].id }));
                    
                    return { images: images, audio: audioFile, highlights: highlights };
                }`,
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'waitForEndAudio': true,
                'feedbackAudio': true,
                'parentTextBlock': parentTextBlock
            },
                        'surprise-why-explanation': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function(expData, sequence) { const lastFrameData = expData[sequence[sequence.length - 1]]; const lastChoice = lastFrameData?.selectedImage; let audioFile = ""; let imageSrc = ""; switch (lastChoice) { case "not_surprised": audioFile = "not_surprised_why"; imageSrc = "surprise_scale_not_surprised.png"; break; case "a_little_surprised": audioFile = "little_surprised_why"; imageSrc = "surprise_scale_a_little_surprised.png"; break; case "pretty_surprised": audioFile = "pretty_surprised_why"; imageSrc = "surprise_scale_sorta_surprised.png"; break; case "very_surprised": audioFile = "very_surprised_why"; imageSrc = "surprise_scale_very_surprised.png"; break; } return { audio: audioFile, images: [{ id: "feedback_image", src: imageSrc, left: 35, top: 20, width: 30, height: 50, nonChoiceOption: true }]}; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': false,
                'waitForEndAudio': true,
                'autoProceed': false,
                'durationSeconds': 15,
                'parentTextBlock': parentTextBlock
            },
            'how-did-you-choose': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function() { return { images: [] }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audio': 'card_selection_how',
                'audioTypes': ['mp3'],
                'choiceRequired': false,
                'waitForEndAudio': true,
                'autoProceed': false,
                'durationSeconds': 15,
                'parentTextBlock': parentTextBlock
            },
                
                'final-thank-you': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'thank_you',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': false,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'videoTypes': ['mp4']
                }
        };
        Object.values(frames).forEach(frame => {
            if (frame.kind === 'exp-lookit-video-consent' || frame.kind === 'exp-lookit-text' || frame.kind === 'exp-video-config' || frame.kind === 'exp-video-config-quality' || frame.kind === 'exp-lookit-start-recording' || frame.kind === 'exp-lookit-stop-recording' || frame.kind === 'exp-lookit-survey' || frame.kind === 'exp-lookit-exit-survey') return;
            frame.showPreviousButton = false;
            frame.showReplayButton = true;
        });

        return {
            frames: frames,
            sequence: [
                'welcome', 'video-config', 'video-consent', 'positioning', 'start-recording',
                'welcome-to-my-game',
                'minority-intro',
                'minority-test-win',
                'minority-intro-2-surprising',
                'minority-select-1',
                'minority-select-2',
                'minority-select-3',
                'minority-select-3-combined',
                'minority-prediction-question',
                'minority-prediction-reveal-transition',
                'minority-reveal-stars-surprising',
                'surprise-rating-yes-no-surprising',
                'surprise-rating-graded-surprising',
                'surprise-why-explanation',
                'how-did-you-choose',
                'final-thank-you',
                'stop-recording', 'email-survey', 'exit-survey'
            ]
        };
    } else { // 'unsurprising' condition
        const frames = {
            ...baseFrames,
             'welcome-to-my-game': {
                'kind': 'exp-lookit-video',
                'video': { 'source': 'background_welcome' },
                'backgroundColor': 'black',
                'autoProceed': false,
                'parentTextBlock': parentTextBlock,
                'doRecording': false,
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'videoTypes': ['mp4']
            },
            'minority-intro': {
                'kind': 'exp-lookit-video',
                'video': { 'source': 'game_intro_1' },
                'backgroundColor': 'black',
                'autoProceed': true,
                'parentTextBlock': parentTextBlock,
                'doRecording': false,
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'videoTypes': ['mp4']
            },
            'minority-test-win': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function() { let images = []; const centerOffset = 15; const spacing = 50; images.push({ id: "star", src: "card_star.png", left: centerOffset, top: 30, width: 15, height: 35, correct: true, feedbackAudio: "control_question_correct" }); images.push({ id: "dash", src: "card_dash.png", left: centerOffset + spacing, top: 30, width: 15, height: 35, correct: false, feedbackAudio: "control_question_incorrect" }); return { images: images }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audio': 'control_question',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'correctChoice': 'star',
                'correctChoiceRequired': true,
                'feedbackAudio': true,
                'nextButtonDelay': 'feedbackAudioEnd',
                'parentTextBlock': parentTextBlock,
                'highlights': [
                    { 'range': [8, 10], 'imageId': 'star', 'color': 'blue' },
                    { 'range': [13, 15], 'imageId': 'dash', 'color': 'blue' }
                ]
            },
            'minority-intro-2-unsurprising': {
                'kind': 'exp-lookit-video',
                'video': { 'source': 'game_intro_2_unsurprising' },
                'backgroundColor': 'black',
                'autoProceed': false,
                'doRecording': false,
                'parentTextBlock': parentTextBlock,
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'videoTypes': ['mp4']
            },
            'minority-select-1-unsurprising': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function() { const markedPositions = [[0, 2], [1, 0], [2, 4]]; const cardWidth = 12; const cardHeight = 28; const cardsPerRow = 5; const horizontalSpacing = 14; const verticalSpacing = 32; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const startLeft = (100 - totalWidth) / 2; const startTop = 5; let images = []; for (let i = 0; i < 15; i++) { const row = Math.floor(i / cardsPerRow); const col = i % cardsPerRow; const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); images.push({ id: String(i + 1), src: isMarked ? "card_back_with_marker.png" : "card_back.png", left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, feedbackAudio: "cards_selection_picknext" }); } return { images: images, audio: "threecards_picking_first" }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'feedbackAudio': true,
                'waitForEndAudio': true,
                'parentTextBlock': parentTextBlock
            },
            'minority-select-2-unsurprising': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function(expData, sequence) { const markedPositions = [[0, 2], [1, 0], [2, 4]]; const cardWidth = 12; const cardHeight = 28; const cardsPerRow = 5; const horizontalSpacing = 14; const verticalSpacing = 32; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const startLeft = (100 - totalWidth) / 2; const startTop = 5; const firstFrameId = sequence[sequence.length - 1]; const clickEvents = expData[firstFrameId]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const lastSelection = clickEvents[clickEvents.length - 1]?.imageId; let images = []; for (let i = 0; i < 15; i++) { const row = Math.floor(i / cardsPerRow); const col = i % cardsPerRow; const cardNum = String(i + 1); const isSelected = cardNum === lastSelection; const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); let cardImage; if (isSelected) { cardImage = isMarked ? "card_back_with_marker_selected.png" : "card_back_selected.png"; } else { cardImage = isMarked ? "card_back_with_marker.png" : "card_back.png"; } images.push({ id: cardNum, src: cardImage, left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: isSelected, feedbackAudio: "cards_selection_picknext" }); } return { images: images, audio: "cards_selection_picksecond" }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'feedbackAudio': true,
                'waitForEndAudio': true,
                'parentTextBlock': parentTextBlock
            },
            'minority-select-3-unsurprising': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function(expData, sequence) { const markedPositions = [[0, 2], [1, 0], [2, 4]]; const cardWidth = 12; const cardHeight = 28; const cardsPerRow = 5; const horizontalSpacing = 14; const verticalSpacing = 32; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const startLeft = (100 - totalWidth) / 2; const startTop = 5; const frame1Id = sequence[sequence.length - 2]; const frame2Id = sequence[sequence.length - 1]; const clickEvents1 = expData[frame1Id]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const clickEvents2 = expData[frame2Id]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const selection1 = clickEvents1[clickEvents1.length - 1]?.imageId; const selection2 = clickEvents2[clickEvents2.length - 1]?.imageId; let images = []; for (let i = 0; i < 15; i++) { const row = Math.floor(i / cardsPerRow); const col = i % cardsPerRow; const cardNum = String(i + 1); const isPreviouslySelected = cardNum === selection1 || cardNum === selection2; const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); let cardImage; if (isPreviouslySelected) { cardImage = isMarked ? "card_back_with_marker_selected.png" : "card_back_selected.png"; } else { cardImage = isMarked ? "card_back_with_marker.png" : "card_back.png"; } images.push({ id: cardNum, src: cardImage, left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: isPreviouslySelected, feedbackAudio: "cards_selection_okay" }); } return { images: images, audio: "cards_selection_picklast" }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'feedbackAudio': true,
                'waitForEndAudio': true,
                'parentTextBlock': parentTextBlock
            },
            'minority-select-3-combined-unsurprising': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function(expData, sequence) { const markedPositions = [[0, 2], [1, 0], [2, 4]]; const cardWidth = 12; const cardHeight = 28; const cardsPerRow = 5; const horizontalSpacing = 14; const verticalSpacing = 32; const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth)); const startLeft = (100 - totalWidth) / 2; const startTop = 5; const frame1Id = sequence[sequence.length - 3]; const frame2Id = sequence[sequence.length - 2]; const frame3Id = sequence[sequence.length - 1]; const clickEvents1 = expData[frame1Id]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const clickEvents2 = expData[frame2Id]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const clickEvents3 = expData[frame3Id]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; const selection1 = clickEvents1[clickEvents1.length - 1]?.imageId; const selection2 = clickEvents2[clickEvents2.length - 1]?.imageId; const selection3 = clickEvents3[clickEvents3.length - 1]?.imageId; let images = []; for (let i = 0; i < 15; i++) { const row = Math.floor(i / cardsPerRow); const col = i % cardsPerRow; const cardNum = String(i + 1); const isPreviouslySelected = cardNum === selection1 || cardNum === selection2 || cardNum === selection3; const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col); let cardImage; if (isPreviouslySelected) { cardImage = isMarked ? "card_back_with_marker_selected.png" : "card_back_selected.png"; } else { cardImage = isMarked ? "card_back_with_marker.png" : "card_back.png"; } images.push({ id: cardNum, src: cardImage, left: startLeft + (col * horizontalSpacing), top: startTop + (row * verticalSpacing), width: cardWidth, height: cardHeight, nonChoiceOption: true }); } return { images: images, audio: "stars_prereveal_question" }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': false,
                'waitForEndAudio': true,
                'autoProceed': false,
                'parentTextBlock': parentTextBlock
            },
            'minority-prediction-question': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': `function() {
                    const baseOptions = [
                        { id: "three_stars", src: "three_stars.png", feedbackAudio: "prereveal_threestars" },
                        { id: "two_stars", src: "two_stars.png", feedbackAudio: "prereveal_twostars" },
                        { id: "one_star", src: "one_star.png", feedbackAudio: "prereveal_onestar" },
                        { id: "all_dash", src: "all_dash.png", feedbackAudio: "prereveal_nostars" }
                    ];
                    const baseHighlights = [
                        { 'range': [2.75, 4], 'color': 'yellow' },
                        { 'range': [4, 5.25], 'color': 'yellow' },
                        { 'range': [5.25, 6.5], 'color': 'yellow' },
                        { 'range': [6.5, 7.75], 'color': 'yellow' }
                    ];
                    const orderedOptions = ${isFlipped} ? [...baseOptions].reverse() : baseOptions;
                    const ratingWidth = 20; const ratingHeight = 35; const ratingY = 30; const spacing = 5;
                    const startX = (100 - (4 * ratingWidth + 3 * spacing)) / 2;
                    let images = orderedOptions.map((option, index) => ({ ...option, left: startX + index * (ratingWidth + spacing), top: ratingY, width: ratingWidth, height: ratingHeight }));
                    const audio = ${isFlipped} ? 'stars_prereveal_prediction_flipped' : 'stars_prereveal_prediction';
                    const highlights = baseHighlights.map((highlight, index) => ({ ...highlight, imageId: orderedOptions[index].id }));
                    return { images: images, audio: audio, highlights: highlights };
                }`,
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'waitForEndAudio': true,
                'feedbackAudio': true,
                'parentTextBlock': parentTextBlock
            },
            'minority-prediction-reveal-transition': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function() { return { images: [], audio: "cards_selection_alldone" }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': false,
                'waitForEndAudio': true,
                'durationSeconds': 3,
                'parentTextBlock': parentTextBlock
            },
            'minority-reveal-stars-unsurprising': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': `function(expData, sequence) {
                    const markedPositions = [[0, 2], [1, 0], [2, 4]];
                    const cardsPerRow = 5;
                    const frameIds = [sequence[sequence.length - 6], sequence[sequence.length - 5], sequence[sequence.length - 4]];
                    const selections = frameIds.map(frameId => {
                        const clickEvents = expData[frameId]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || [];
                        return clickEvents.length > 0 ? clickEvents[clickEvents.length - 1].imageId : undefined;
                    }).filter(id => id !== undefined);
                    
                    const correctSelections = selections.filter(selection => {
                        const pos = parseInt(selection) - 1;
                        const row = Math.floor(pos / cardsPerRow);
                        const col = pos % cardsPerRow;
                        return markedPositions.some(markedPos => markedPos[0] === row && markedPos[1] === col);
                    }).length;

                    const cardWidth = 12; const cardHeight = 28; const horizontalSpacing = 14; const verticalSpacing = 32;
                    const totalWidth = (cardsPerRow * cardWidth) + ((cardsPerRow - 1) * (horizontalSpacing - cardWidth));
                    const startLeft = (100 - totalWidth) / 2; const startTop = 5;
                    
                    let images = [];
                    for (let i = 0; i < 15; i++) {
                        const row = Math.floor(i / cardsPerRow);
                        const col = i % cardsPerRow;
                        const cardNum = String(i + 1);
                        const isSelected = selections.includes(cardNum);
                        const isMarked = markedPositions.some(pos => pos[0] === row && pos[1] === col);
                        images.push({
                            id: cardNum,
                            src: isSelected ? (isMarked ? "card_star.png" : "card_dash.png") : (isMarked ? "card_back_with_marker.png" : "card_back.png"),
                            left: startLeft + (col * horizontalSpacing),
                            top: startTop + (row * verticalSpacing),
                            width: cardWidth, height: cardHeight, nonChoiceOption: true
                        });
                    }
                    
                    let audioFile;
                    if (correctSelections === 3) { audioFile = "cards_selection_reveal"; }
                    else if (correctSelections === 2) { audioFile = "cards_selection_reveal"; }
                    else if (correctSelections === 1) { audioFile = "cards_selection_reveal"; }
                    else { audioFile = "cards_selection_reveal"; }

                    return { images: images, audio: audioFile };
                }`,
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'waitForEndAudio': true,
                'autoProceed': false,
                'durationSeconds': 10,
                'parentTextBlock': parentTextBlock
            },
            'surprise-rating-yes-no-unsurprising': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': `function(expData, sequence) {
                    const markedPositions = [[0, 2], [1, 0], [2, 4]]; const cardsPerRow = 5;
                    const frameIds = [sequence[sequence.length - 7], sequence[sequence.length - 6], sequence[sequence.length - 5]];
                    const selections = frameIds.map(frameId => { const clickEvents = expData[frameId]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; return clickEvents.length > 0 ? clickEvents[clickEvents.length - 1].imageId : undefined; }).filter(id => id !== undefined);
                    const correctSelections = selections.filter(selection => { const pos = parseInt(selection) - 1; const row = Math.floor(pos / cardsPerRow); const col = pos % cardsPerRow; return markedPositions.some(markedPos => markedPos[0] === row && markedPos[1] === col); }).length;
                    let topImageFile; let surpriseAudio;
                    if (correctSelections === 3) { topImageFile = "selection_three_stars.png"; surpriseAudio = ${isFlipped} ? "allthreestars_surprise_scale_flipped" : "allthreestars_surprise_scale"; }
                    else if (correctSelections === 2) { topImageFile = "two_stars.png"; surpriseAudio = ${isFlipped} ? "twostars_surprise_scale_flipped" : "twostars_surprise_scale"; }
                    else if (correctSelections === 1) { topImageFile = "one_star.png"; surpriseAudio = ${isFlipped} ? "onestar_surprise_scale_flipped" : "onestar_surprise_scale"; }
                    else { topImageFile = "all_dash.png"; surpriseAudio = ${isFlipped} ? "nostars_surprise_scale_flipped" : "nostars_surprise_scale"; }
                    let images = [{ id: "topImage", src: topImageFile, left: 15, top: 0, width: 70, height: 45, nonChoiceOption: true }];
                    const baseOptions = [
                        { id: "surprised", src: "surprise_scale_a_little_surprised.png", feedbackAudio: "surprised" },
                        { id: "not_surprised", src: "surprise_scale_not_surprised.png", feedbackAudio: "not_surprised" }
                    ];
                    const baseHighlights = [ { 'range': [5, 7], 'color': 'yellow' }, { 'range': [7, 9], 'color': 'yellow' } ];
                    const orderedOptions = ${isFlipped} ? [...baseOptions].reverse() : baseOptions;
                    const ratingWidth = 25; const ratingHeight = 40; const ratingY = 50; const spacing = 20; const startX = (100 - (2 * ratingWidth + spacing)) / 2;
                    orderedOptions.forEach((option, index) => {
                        images.push({ ...option, left: startX + index * (ratingWidth + spacing), top: ratingY, width: ratingWidth, height: ratingHeight });
                    });
                    const highlights = baseHighlights.map((highlight, index) => ({ ...highlight, imageId: orderedOptions[index].id }));
                    return { images: images, audio: surpriseAudio, highlights: highlights };
                }`,
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'waitForEndAudio': true,
                'feedbackAudio': true,
                'parentTextBlock': parentTextBlock,
                'selectNextFrame': 'function(frames, frameIndex, frameData) { return frameData.selectedImage === "not_surprised" ? frameIndex + 2 : frameIndex + 1; }'
            },
             'surprise-rating-graded-unsurprising': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': `function(expData, sequence) {
                    const markedPositions = [[0, 2], [1, 0], [2, 4]]; const cardsPerRow = 5;
                    const frameIds = [sequence[sequence.length - 8], sequence[sequence.length - 7], sequence[sequence.length - 6]];
                    const selections = frameIds.map(frameId => { const clickEvents = expData[frameId]?.eventTimings?.filter(event => event.eventType === "exp-lookit-images-audio:clickImage") || []; return clickEvents.length > 0 ? clickEvents[clickEvents.length - 1].imageId : undefined; }).filter(id => id !== undefined);
                    const correctSelections = selections.filter(selection => { const pos = parseInt(selection) - 1; const row = Math.floor(pos / cardsPerRow); const col = pos % cardsPerRow; return markedPositions.some(markedPos => markedPos[0] === row && markedPos[1] === col); }).length;
                    
                    let topImageFile;
                    let audioPrefix;
                    if (correctSelections === 3) { topImageFile = "selection_three_stars.png"; audioPrefix = "threestars"; }
                    else if (correctSelections === 2) { topImageFile = "two_stars.png"; audioPrefix = "twostars"; }
                    else if (correctSelections === 1) { topImageFile = "one_star.png"; audioPrefix = "onestar"; }
                    else { topImageFile = "all_dash.png"; audioPrefix = "nostars"; }

                    const baseOptions = [
                        { id: "a_little_surprised", src: "surprise_scale_a_little_surprised.png", feedbackAudio: "a_little_surprised" },
                        { id: "pretty_surprised", src: "surprise_scale_somewhat_surprised.png", feedbackAudio: "pretty_surprised" },
                        { id: "very_surprised", src: "surprise_scale_very_surprised.png", feedbackAudio: "very_surprised" }
                    ];
                    const baseHighlights = [ { 'range': [4, 6], 'color': 'yellow' }, { 'range': [6, 8], 'color': 'yellow' }, { 'range': [8, 10], 'color': 'yellow' } ];
                    const orderedOptions = ${isFlipped} ? [...baseOptions].reverse() : baseOptions;
                    
                    let images = [{ id: "topImage", src: topImageFile, left: 15, top: 0, width: 70, height: 45, nonChoiceOption: true }];
                    const ratingWidth = 20; const ratingHeight = 35; const ratingY = 50; const spacing = 10;
                    const startX = (100 - (3 * ratingWidth + 2 * spacing)) / 2;
                    orderedOptions.forEach((option, index) => {
                        images.push({ ...option, left: startX + index * (ratingWidth + spacing), top: ratingY, width: ratingWidth, height: ratingHeight });
                    });
                    
                    const audioFile = ${isFlipped} ? audioPrefix + "_surprised_followup_flipped" : audioPrefix + "_surprised_followup";
                    const highlights = baseHighlights.map((highlight, index) => ({ ...highlight, imageId: orderedOptions[index].id }));
                    
                    return { images: images, audio: audioFile, highlights: highlights };
                }`,
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': true,
                'waitForEndAudio': true,
                'feedbackAudio': true,
                'parentTextBlock': parentTextBlock
            },
            'surprise-why-explanation': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function(expData, sequence) { const lastFrameData = expData[sequence[sequence.length - 1]]; const lastChoice = lastFrameData?.selectedImage; let audioFile = ""; let imageSrc = ""; switch (lastChoice) { case "not_surprised": audioFile = "not_surprised_why"; imageSrc = "surprise_scale_not_surprised.png"; break; case "a_little_surprised": audioFile = "little_surprised_why"; imageSrc = "surprise_scale_a_little_surprised.png"; break; case "pretty_surprised": audioFile = "pretty_surprised_why"; imageSrc = "surprise_scale_sorta_surprised.png"; break; case "very_surprised": audioFile = "very_surprised_why"; imageSrc = "surprise_scale_very_surprised.png"; break; } return { audio: audioFile, images: [{ id: "feedback_image", src: imageSrc, left: 35, top: 20, width: 30, height: 50, nonChoiceOption: true }]}; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audioTypes': ['mp3'],
                'choiceRequired': false,
                'waitForEndAudio': true,
                'autoProceed': false,
                'durationSeconds': 15,
                'parentTextBlock': parentTextBlock
            },
            'how-did-you-choose': {
                'kind': 'exp-lookit-images-audio',
                'generateProperties': 'function() { return { images: [] }; }',
                'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                'audio': 'card_selection_how',
                'audioTypes': ['mp3'],
                'choiceRequired': false,
                'waitForEndAudio': true,
                'autoProceed': false,
                'durationSeconds': 15,
                'parentTextBlock': parentTextBlock
            },
                
                'final-thank-you': {
                    'kind': 'exp-lookit-video',
                    'video': {
                        'top': 0,
                        'left': 0,
                        'width': 100,
                        'source': 'thank_you',
                        'loop': false
                    },
                    'backgroundColor': 'black',
                    'autoProceed': false,
                    'doRecording': false,
                    'baseDir': 'https://raw.githubusercontent.com/sociallearninglab/self-surprise-lookit-public/main',
                    'showPreviousButton': false,
                    'showReplayButton': true,
                    'videoTypes': ['mp4']
                }
        };
        Object.values(frames).forEach(frame => {
            if (frame.kind === 'exp-lookit-video-consent' || frame.kind === 'exp-lookit-text' || frame.kind === 'exp-video-config' || frame.kind === 'exp-video-config-quality' || frame.kind === 'exp-lookit-start-recording' || frame.kind === 'exp-lookit-stop-recording' || frame.kind === 'exp-lookit-survey' || frame.kind === 'exp-lookit-exit-survey') return;
            frame.showPreviousButton = false;
            frame.showReplayButton = true;
        });

        return {
            frames: frames,
            sequence: [
                'welcome', 'video-config', 'video-consent', 'positioning', 'start-recording',
                'welcome-to-my-game',
                'minority-intro',
                'minority-test-win',
                'minority-intro-2-unsurprising',
                'minority-select-1-unsurprising',
                'minority-select-2-unsurprising',
                'minority-select-3-unsurprising',
                'minority-select-3-combined-unsurprising',
                'minority-prediction-question',
                'minority-prediction-reveal-transition',
                'minority-reveal-stars-unsurprising',
                'surprise-rating-yes-no-unsurprising',
                'surprise-rating-graded-unsurprising',
                'surprise-why-explanation',
                'how-did-you-choose',
                'final-thank-you',
                'stop-recording', 'email-survey', 'exit-survey'
            ]
        };
    }
}