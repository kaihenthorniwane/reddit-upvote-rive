"use client";

import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect } from "react";

export type RedditPostProps = {
  upvotes: number;
  subreddit: {
    subredditName: string;
  };
  postContent: {
    title: string;
    text: string;
  };
};

export default function RedditPost({
  subreddit,
  upvotes,
  postContent,
}: RedditPostProps) {
  const upvoteVals = {
    1: (upvotes + 1).toString(),
    0: upvotes.toString(),
    "-1": (upvotes - 1).toString(),
  };

  const { rive, RiveComponent } = useRive({
    src: "/riv/upvote.riv",
    stateMachines: "Upvote",
    autoplay: true,
  });

  const upvoteStateInput = useStateMachineInput(rive, "Upvote", "State", 0);

  const handleUpvoteButton = () => {
    if (upvoteStateInput) {
      const priorUpvoteStateInputVal = upvoteStateInput.value;
      const newInputVal = priorUpvoteStateInputVal === 1 ? 0 : 1;
      upvoteStateInput.value = newInputVal;
      if (rive) {
        rive.setTextRunValue("Upvotes", upvoteVals[newInputVal]);
      }
    }
  };

  const handleDownvoteButton = () => {
    if (upvoteStateInput) {
      const priorUpvoteStateInputVal = upvoteStateInput.value;
      const newInputVal = priorUpvoteStateInputVal === -1 ? 0 : -1;
      upvoteStateInput.value = newInputVal;
      if (rive) {
        rive.setTextRunValue("Upvotes", upvoteVals[newInputVal]);
      }
    }
  };

  useEffect(() => {
    if (rive) {
      rive.setTextRunValue("Upvotes", upvotes.toString());
    }
  }, [rive]);

  return (
    <div className="flex gap-2 items-start">
      <div className="min-w-[2.8125rem] aspect-[36/66] relative p-1">
        <div className="grid w-full h-full">
          <button onClick={handleUpvoteButton}></button>
          <button onClick={handleDownvoteButton}></button>
        </div>
        <div className="absolute -z-10 left-0 top-0 right-0 bottom-0">
          <RiveComponent />
        </div>
      </div>
      <div className="flex flex-col mt-2.5 gap-2">
        <div className="flex gap-1.5 items-center text-sm leading-none">
          {`r/${subreddit.subredditName}`}
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-medium text-lg">{postContent.title}</div>
          <div className="text-sm leading-relaxed line-clamp-5">
            {" "}
            {postContent.text}
          </div>
        </div>
      </div>
    </div>
  );
}
