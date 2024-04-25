"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateFeedback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const feedbackId = searchParams.get("id");

  const [post, setPost] = useState({ feedback: "", tag: "", date: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getFeedbackDetails = async () => {
      const response = await fetch(`/api/feedback/${feedbackId}`);
      const data = await response.json();

      setPost({
        feedback: data.feedback,
        tag: data.tag,
        date: data.date,
      });
    };

    if (feedbackId) getFeedbackDetails();
  }, [feedbackId]);

  const updateFeedback = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!feedbackId) return alert("Missing FeedbackId!");

    try {
      const response = await fetch(`/api/feedback/${feedbackId}`, {
        method: "PATCH",
        body: JSON.stringify({
          feedback: post.feedback,
          tag: post.tag,
          date: post.date,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateFeedback}
    />
  );
};

export default UpdateFeedback;