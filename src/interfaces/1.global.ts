interface Process {
  exit(code?: number): void;
}

export declare let process: Process;

interface Process {
  exitWithLogging(code?: number): void;
}

process.exitWithLogging = function() {
  console.log("exiting");
  process.exit.apply(process, arguments);
};

process.exitWithLogging();
