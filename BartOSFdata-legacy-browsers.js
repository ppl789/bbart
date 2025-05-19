﻿/******************** 
 * Bartosfdata *
 ********************/


// store info about the experiment session:
let expName = 'BartOSFdata';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'age': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), 0.6157, 0.6392]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);






flowScheduler.add(finalScoreRoutineBegin());
flowScheduler.add(finalScoreRoutineEachFrame());
flowScheduler.add(finalScoreRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'spreadsheets/conditions.xlsx', 'path': 'spreadsheets/conditions.xlsx'},
    {'name': 'assets/background.png', 'path': 'assets/background.png'},
    {'name': 'assets/bang.wav', 'path': 'assets/bang.wav'},
    {'name': 'assets/redBalloon.png', 'path': 'assets/redBalloon.png'},
    {'name': 'assets/bang.wav', 'path': 'assets/bang.wav'},
    {'name': 'assets/blueBalloon.png', 'path': 'assets/blueBalloon.png'},
    {'name': 'assets/greenBalloon.png', 'path': 'assets/greenBalloon.png'},
    {'name': 'assets/redBalloon.png', 'path': 'assets/redBalloon.png'},
    {'name': 'assets/bang.mp3', 'path': 'assets/bang.mp3'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.0';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + (("data" + "/") + `${expInfo["participant"]}_${expInfo["date"]}`));
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructionsClock;
var background;
var resp;
var instrtxt;
var pop_sound;
var reset_balloonClock;
var trialClock;
var background_2;
var bankButton;
var bankedEarnings;
var balloonEarnings;
var bankedText;
var lastBalloonEarnings;
var thisBalloonEarnings;
var reminder;
var balloonValTxt;
var bankedTxt;
var balloonSize;
var balloonMsgHeight;
var balloonBody;
var trialcount;
var feedbackClock;
var background_3;
var feedbackText;
var feedbacktxt;
var bankedTxt_2;
var balloonValTxt_2;
var reminder_2;
var trialcount_2;
var finalScoreClock;
var background_4;
var scoremsg;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  background = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background', units : undefined, 
    image : 'assets/background.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instrtxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'instrtxt',
    text: "This is a game where you have to optimise your earnings in a balloon pumping competition.\n\nYou get prize money for each balloon you pump up, according to its size. But if you pump it too far it will pop and you'll get nothing for that balloon.\n\nBalloons differ in their maximum size - they can occasionally reach to almost the size of the screen but most will pop well before that.\n\nPress\n    SPACE to pump the balloon\n    RETURN to bank the cash for this balloon and move onto the next",
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [1, 0.7],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  pop_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'assets/bang.wav',
      secs: 1.0,
      });
  pop_sound.setVolume(0.0);
  pop_sound.isPlaying = false;
  pop_sound.isFinished = false;
  // Initialize components for Routine "reset_balloon"
  reset_balloonClock = new util.Clock();
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  background_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_2', units : undefined, 
    image : 'assets/background.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  bankButton = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from updateEarnings
  bankedEarnings = 0.0;
  balloonEarnings = "";
  bankedText = "";
  lastBalloonEarnings = 0.0;
  thisBalloonEarnings = 0.0;
  
  reminder = new visual.TextBox({
    win: psychoJS.window,
    name: 'reminder',
    text: 'Press SPACE to pump the balloon\nPress RETURN to bank this sum',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.3)], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  balloonValTxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'balloonValTxt',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  bankedTxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'bankedTxt',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  // Run 'Begin Experiment' code from setBalloonSize
  balloonSize = 0.08;
  balloonMsgHeight = 0.01;
  
  balloonBody = new visual.ImageStim({
    win : psychoJS.window,
    name : 'balloonBody', units : 'height', 
    image : 'assets/redBalloon.png', mask : undefined,
    anchor : 'center',
    ori : (- 90), 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  trialcount = new visual.TextBox({
    win: psychoJS.window,
    name: 'trialcount',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, (- 0.3)], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  background_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_3', units : undefined, 
    image : 'assets/background.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Run 'Begin Experiment' code from checkPopped
  feedbackText = "";
  
  feedbacktxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'feedbacktxt',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.4, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  bankedTxt_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'bankedTxt_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  balloonValTxt_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'balloonValTxt_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  reminder_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'reminder_2',
    text: 'Press SPACE to pump the balloon\nPress RETURN to bank this sum',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.3)], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  trialcount_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'trialcount_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, (- 0.3)], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  // Initialize components for Routine "finalScore"
  finalScoreClock = new util.Clock();
  background_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_4', units : undefined, 
    image : 'assets/background.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  scoremsg = new visual.TextBox({
    win: psychoJS.window,
    name: 'scoremsg',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [1, 0.7],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instructionsMaxDurationReached;
var _resp_allKeys;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    resp.keys = undefined;
    resp.rt = undefined;
    _resp_allKeys = [];
    pop_sound.isFinished = false;
    pop_sound.secs=1.0;
    pop_sound.setVolume(0.0);
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(background);
    instructionsComponents.push(resp);
    instructionsComponents.push(instrtxt);
    instructionsComponents.push(pop_sound);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background* updates
    if (t >= 0.0 && background.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background.tStart = t;  // (not accounting for frame time here)
      background.frameNStart = frameN;  // exact frame index
      
      background.setAutoDraw(true);
    }
    
    
    // if background is active this frame...
    if (background.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *resp* updates
    if (t >= 0.0 && resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp.tStart = t;  // (not accounting for frame time here)
      resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp.clearEvents(); });
    }
    
    // if resp is active this frame...
    if (resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp.getKeys({keyList: 'space', waitRelease: false});
      _resp_allKeys = _resp_allKeys.concat(theseKeys);
      if (_resp_allKeys.length > 0) {
        resp.keys = _resp_allKeys[_resp_allKeys.length - 1].name;  // just the last key pressed
        resp.rt = _resp_allKeys[_resp_allKeys.length - 1].rt;
        resp.duration = _resp_allKeys[_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instrtxt* updates
    if (t >= 0.0 && instrtxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrtxt.tStart = t;  // (not accounting for frame time here)
      instrtxt.frameNStart = frameN;  // exact frame index
      
      instrtxt.setAutoDraw(true);
    }
    
    
    // if instrtxt is active this frame...
    if (instrtxt.status === PsychoJS.Status.STARTED) {
    }
    
    if (pop_sound.status === STARTED) {
        pop_sound.isPlaying = true;
        if (t >= (pop_sound.getDuration() + pop_sound.tStart)) {
            pop_sound.isFinished = true;
        }
    }
    // start/stop pop_sound
    if (t >= 0.0 && pop_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pop_sound.tStart = t;  // (not accounting for frame time here)
      pop_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ pop_sound.play(); });  // screen flip
      pop_sound.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (pop_sound.status === PsychoJS.Status.STARTED && t >= frameRemains || pop_sound.isFinished) {
      // keep track of stop time/frame for later
      pop_sound.tStop = t;  // not accounting for scr refresh
      pop_sound.frameNStop = frameN;  // exact frame index
      // update status
      pop_sound.status = PsychoJS.Status.FINISHED;
      // stop playback
      pop_sound.stop();
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    resp.stop();
    pop_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'spreadsheets/conditions.xlsx',
      seed: 1832, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(reset_balloonRoutineBegin(snapshot));
      trialsLoopScheduler.add(reset_balloonRoutineEachFrame());
      trialsLoopScheduler.add(reset_balloonRoutineEnd(snapshot));
      const pumpLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(pumpLoopBegin(pumpLoopScheduler, snapshot));
      trialsLoopScheduler.add(pumpLoopScheduler);
      trialsLoopScheduler.add(pumpLoopEnd);
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var pump;
function pumpLoopBegin(pumpLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    pump = new TrialHandler({
      psychoJS: psychoJS,
      nReps: maxPumps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'pump'
    });
    psychoJS.experiment.addLoop(pump); // add the loop to the experiment
    currentLoop = pump;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    pump.forEach(function() {
      snapshot = pump.getSnapshot();
    
      pumpLoopScheduler.add(importConditions(snapshot));
      pumpLoopScheduler.add(trialRoutineBegin(snapshot));
      pumpLoopScheduler.add(trialRoutineEachFrame());
      pumpLoopScheduler.add(trialRoutineEnd(snapshot));
      pumpLoopScheduler.add(pumpLoopEndIteration(pumpLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function pumpLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(pump);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function pumpLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var reset_balloonMaxDurationReached;
var popped;
var nPumps;
var reset_balloonMaxDuration;
var reset_balloonComponents;
function reset_balloonRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reset_balloon' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    reset_balloonClock.reset();
    routineTimer.reset();
    reset_balloonMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    balloonSize = 0.08;
    popped = false;
    nPumps = 0;
    
    psychoJS.experiment.addData('reset_balloon.started', globalClock.getTime());
    reset_balloonMaxDuration = null
    // keep track of which components have finished
    reset_balloonComponents = [];
    
    reset_balloonComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function reset_balloonRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reset_balloon' ---
    // get current time
    t = reset_balloonClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    reset_balloonComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function reset_balloonRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reset_balloon' ---
    reset_balloonComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('reset_balloon.stopped', globalClock.getTime());
    // the Routine "reset_balloon" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialMaxDurationReached;
var _bankButton_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    bankButton.keys = undefined;
    bankButton.rt = undefined;
    _bankButton_allKeys = [];
    // Run 'Begin Routine' code from updateEarnings
    thisBalloonEarnings = ((pump.thisN + 1) * 0.05);
    balloonEarnings = ("This balloon value:\n\u00a3" + util.round(thisBalloonEarnings, 2).toString());
    bankedText = ("You have banked:\n\u00a3" + util.round(bankedEarnings, 2).toString());
    
    // Run 'Begin Routine' code from setBalloonSize
    balloonBody.setPos([0, ((balloonSize / 2) - 0.5)]);
    balloonBody.setSize(balloonSize);
    
    trialcount.setText(((("Ballon number: " + (trials.thisN + 1).toString()) + "/") + trials.nTotal.toString()));
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(background_2);
    trialComponents.push(bankButton);
    trialComponents.push(reminder);
    trialComponents.push(balloonValTxt);
    trialComponents.push(bankedTxt);
    trialComponents.push(balloonBody);
    trialComponents.push(trialcount);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_2* updates
    if (t >= 0.0 && background_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_2.tStart = t;  // (not accounting for frame time here)
      background_2.frameNStart = frameN;  // exact frame index
      
      background_2.setAutoDraw(true);
    }
    
    
    // if background_2 is active this frame...
    if (background_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *bankButton* updates
    if (t >= 0.0 && bankButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bankButton.tStart = t;  // (not accounting for frame time here)
      bankButton.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { bankButton.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { bankButton.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { bankButton.clearEvents(); });
    }
    
    // if bankButton is active this frame...
    if (bankButton.status === PsychoJS.Status.STARTED) {
      let theseKeys = bankButton.getKeys({keyList: ['return','space'], waitRelease: false});
      _bankButton_allKeys = _bankButton_allKeys.concat(theseKeys);
      if (_bankButton_allKeys.length > 0) {
        bankButton.keys = _bankButton_allKeys[_bankButton_allKeys.length - 1].name;  // just the last key pressed
        bankButton.rt = _bankButton_allKeys[_bankButton_allKeys.length - 1].rt;
        bankButton.duration = _bankButton_allKeys[_bankButton_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *reminder* updates
    if (t >= 0.0 && reminder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reminder.tStart = t;  // (not accounting for frame time here)
      reminder.frameNStart = frameN;  // exact frame index
      
      reminder.setAutoDraw(true);
    }
    
    
    // if reminder is active this frame...
    if (reminder.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *balloonValTxt* updates
    if (t >= 0.0 && balloonValTxt.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      balloonValTxt.setText(balloonEarnings, false);
      // keep track of start time/frame for later
      balloonValTxt.tStart = t;  // (not accounting for frame time here)
      balloonValTxt.frameNStart = frameN;  // exact frame index
      
      balloonValTxt.setAutoDraw(true);
    }
    
    
    // if balloonValTxt is active this frame...
    if (balloonValTxt.status === PsychoJS.Status.STARTED) {
      // update params
      balloonValTxt.setText(balloonEarnings, false);
    }
    
    
    // *bankedTxt* updates
    if (t >= 0.0 && bankedTxt.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      bankedTxt.setText(bankedText, false);
      // keep track of start time/frame for later
      bankedTxt.tStart = t;  // (not accounting for frame time here)
      bankedTxt.frameNStart = frameN;  // exact frame index
      
      bankedTxt.setAutoDraw(true);
    }
    
    
    // if bankedTxt is active this frame...
    if (bankedTxt.status === PsychoJS.Status.STARTED) {
      // update params
      bankedTxt.setText(bankedText, false);
    }
    
    // Run 'Each Frame' code from setBalloonSize
    balloonSize = (0.1 + ((pump.thisN + 1) * 0.015));
    
    
    // *balloonBody* updates
    if (t >= 0.0 && balloonBody.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      balloonBody.setPos([0, ((balloonSize / 2) - 0.5)], false);
      balloonBody.setSize(balloonSize, false);
      // keep track of start time/frame for later
      balloonBody.tStart = t;  // (not accounting for frame time here)
      balloonBody.frameNStart = frameN;  // exact frame index
      
      balloonBody.setAutoDraw(true);
    }
    
    
    // if balloonBody is active this frame...
    if (balloonBody.status === PsychoJS.Status.STARTED) {
      // update params
      balloonBody.setPos([0, ((balloonSize / 2) - 0.5)], false);
      balloonBody.setSize(balloonSize, false);
    }
    
    
    // *trialcount* updates
    if (t >= 0.0 && trialcount.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialcount.tStart = t;  // (not accounting for frame time here)
      trialcount.frameNStart = frameN;  // exact frame index
      
      trialcount.setAutoDraw(true);
    }
    
    
    // if trialcount is active this frame...
    if (trialcount.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _pj;
function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    bankButton.stop();
    // Run 'End Routine' code from updateEarnings
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (((pump.thisN + 1) === maxPumps)) {
        popped = true;
    } else {
        popped = false;
    }
    if (popped) {
        thisBalloonEarnings = 0.0;
        lastBalloonEarnings = 0.0;
    } else {
        lastBalloonEarnings = thisBalloonEarnings;
    }
    if (_pj.in_es6("return", bankButton.keys)) {
        pump.finished = true;
    }
    
    // Run 'End Routine' code from setBalloonSize
    trials.addData("nPumps", (pump.thisN + 1));
    trials.addData("size", balloonSize);
    trials.addData("earnings", thisBalloonEarnings);
    trials.addData("popped", popped);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(1.500000);
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from checkPopped
    bankedEarnings = (bankedEarnings + lastBalloonEarnings);
    balloonEarnings = ("This balloon value:\n\u00a3" + util.round(thisBalloonEarnings, 2).toString());
    bankedText = ("You have banked:\n\u00a3" + util.round(bankedEarnings, 2).toString());
    pop_sound.setVolume(1);
    if ((popped === true)) {
        feedbackText = "Oops! Lost that one!";
        pop_sound.play();
    } else {
        feedbackText = ("You banked \u00a3" + util.round(lastBalloonEarnings, 2).toString());
    }
    
    feedbacktxt.setText(feedbackText);
    trialcount_2.setText(((("Ballon number: " + (trials.thisN + 1).toString()) + "/") + trials.nTotal.toString()));
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(background_3);
    feedbackComponents.push(feedbacktxt);
    feedbackComponents.push(bankedTxt_2);
    feedbackComponents.push(balloonValTxt_2);
    feedbackComponents.push(reminder_2);
    feedbackComponents.push(trialcount_2);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_3* updates
    if (t >= 0.0 && background_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_3.tStart = t;  // (not accounting for frame time here)
      background_3.frameNStart = frameN;  // exact frame index
      
      background_3.setAutoDraw(true);
    }
    
    
    // if background_3 is active this frame...
    if (background_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (background_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      background_3.tStop = t;  // not accounting for scr refresh
      background_3.frameNStop = frameN;  // exact frame index
      // update status
      background_3.status = PsychoJS.Status.FINISHED;
      background_3.setAutoDraw(false);
    }
    
    
    // *feedbacktxt* updates
    if (t >= 0.0 && feedbacktxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbacktxt.tStart = t;  // (not accounting for frame time here)
      feedbacktxt.frameNStart = frameN;  // exact frame index
      
      feedbacktxt.setAutoDraw(true);
    }
    
    
    // if feedbacktxt is active this frame...
    if (feedbacktxt.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (feedbacktxt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      feedbacktxt.tStop = t;  // not accounting for scr refresh
      feedbacktxt.frameNStop = frameN;  // exact frame index
      // update status
      feedbacktxt.status = PsychoJS.Status.FINISHED;
      feedbacktxt.setAutoDraw(false);
    }
    
    
    // *bankedTxt_2* updates
    if (t >= 0.0 && bankedTxt_2.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      bankedTxt_2.setText(bankedText, false);
      // keep track of start time/frame for later
      bankedTxt_2.tStart = t;  // (not accounting for frame time here)
      bankedTxt_2.frameNStart = frameN;  // exact frame index
      
      bankedTxt_2.setAutoDraw(true);
    }
    
    
    // if bankedTxt_2 is active this frame...
    if (bankedTxt_2.status === PsychoJS.Status.STARTED) {
      // update params
      bankedTxt_2.setText(bankedText, false);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (bankedTxt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      bankedTxt_2.tStop = t;  // not accounting for scr refresh
      bankedTxt_2.frameNStop = frameN;  // exact frame index
      // update status
      bankedTxt_2.status = PsychoJS.Status.FINISHED;
      bankedTxt_2.setAutoDraw(false);
    }
    
    
    // *balloonValTxt_2* updates
    if (t >= 0.0 && balloonValTxt_2.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      balloonValTxt_2.setText(balloonEarnings, false);
      // keep track of start time/frame for later
      balloonValTxt_2.tStart = t;  // (not accounting for frame time here)
      balloonValTxt_2.frameNStart = frameN;  // exact frame index
      
      balloonValTxt_2.setAutoDraw(true);
    }
    
    
    // if balloonValTxt_2 is active this frame...
    if (balloonValTxt_2.status === PsychoJS.Status.STARTED) {
      // update params
      balloonValTxt_2.setText(balloonEarnings, false);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (balloonValTxt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      balloonValTxt_2.tStop = t;  // not accounting for scr refresh
      balloonValTxt_2.frameNStop = frameN;  // exact frame index
      // update status
      balloonValTxt_2.status = PsychoJS.Status.FINISHED;
      balloonValTxt_2.setAutoDraw(false);
    }
    
    
    // *reminder_2* updates
    if (t >= 0.0 && reminder_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reminder_2.tStart = t;  // (not accounting for frame time here)
      reminder_2.frameNStart = frameN;  // exact frame index
      
      reminder_2.setAutoDraw(true);
    }
    
    
    // if reminder_2 is active this frame...
    if (reminder_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (reminder_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      reminder_2.tStop = t;  // not accounting for scr refresh
      reminder_2.frameNStop = frameN;  // exact frame index
      // update status
      reminder_2.status = PsychoJS.Status.FINISHED;
      reminder_2.setAutoDraw(false);
    }
    
    
    // *trialcount_2* updates
    if (t >= 0.0 && trialcount_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialcount_2.tStart = t;  // (not accounting for frame time here)
      trialcount_2.frameNStart = frameN;  // exact frame index
      
      trialcount_2.setAutoDraw(true);
    }
    
    
    // if trialcount_2 is active this frame...
    if (trialcount_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trialcount_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      trialcount_2.tStop = t;  // not accounting for scr refresh
      trialcount_2.frameNStop = frameN;  // exact frame index
      // update status
      trialcount_2.status = PsychoJS.Status.FINISHED;
      trialcount_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (feedbackMaxDurationReached) {
        feedbackClock.add(feedbackMaxDuration);
    } else {
        feedbackClock.add(1.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var finalScoreMaxDurationReached;
var scoreText;
var finalScoreMaxDuration;
var finalScoreComponents;
function finalScoreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'finalScore' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    finalScoreClock.reset();
    routineTimer.reset();
    finalScoreMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from finalScoreCode
    scoreText="Well done! You banked a total of\n£" + bankedEarnings.toFixed(2);
    scoremsg.setText(scoreText);
    psychoJS.experiment.addData('finalScore.started', globalClock.getTime());
    finalScoreMaxDuration = null
    // keep track of which components have finished
    finalScoreComponents = [];
    finalScoreComponents.push(background_4);
    finalScoreComponents.push(scoremsg);
    
    finalScoreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function finalScoreRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'finalScore' ---
    // get current time
    t = finalScoreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_4* updates
    if (t >= 0.0 && background_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_4.tStart = t;  // (not accounting for frame time here)
      background_4.frameNStart = frameN;  // exact frame index
      
      background_4.setAutoDraw(true);
    }
    
    
    // if background_4 is active this frame...
    if (background_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *scoremsg* updates
    if (t >= 0.0 && scoremsg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scoremsg.tStart = t;  // (not accounting for frame time here)
      scoremsg.frameNStart = frameN;  // exact frame index
      
      scoremsg.setAutoDraw(true);
    }
    
    
    // if scoremsg is active this frame...
    if (scoremsg.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    finalScoreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finalScoreRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'finalScore' ---
    finalScoreComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('finalScore.stopped', globalClock.getTime());
    // the Routine "finalScore" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  // ------------------------------------------------------
  // Disable downloading results to browser
  // ------------------------------------------------------
  psychoJS._saveResults = 0;
  
  
  // ------------------------------------------------------
  // Generate filename for results
  // ------------------------------------------------------
  let filename = psychoJS._experiment.experimentName + '_' + psychoJS._experiment._datetime + '.csv';
  
  
  // ------------------------------------------------------
  // Extract data object from experiment
  // ------------------------------------------------------
  let dataObj = psychoJS._experiment._trialsData;
  
  
  // ------------------------------------------------------
  // Convert data object to CSV
  // ------------------------------------------------------
  let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
      return Object.values(it).toString()
  }).join('\n')
  
  
  // ------------------------------------------------------
  // Send data to OSF via DataPipe
  // ------------------------------------------------------
  console.log('Saving data...');
  fetch('https://pipe.jspsych.org/api/data', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
      },
      body: JSON.stringify({
          experimentID: "ICQBugdfs5bE",  // 请在此处填写你自己的 DataPipe Experiment ID
          filename:filename,
          data: data,
      }),
  }).then(response => response.json()).then(data => {
      //log response and force experiment end
      console.log(data);
      quitPsychoJS();
  })
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
