'use client';

import { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form'

const WriteFeedback = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const [ submitting, setIsSubmitting ] = useState(false);
    const [ post, setPost ] = useState({
        feedback: "",
        tag: "",
        date: ""
    });

    const writeFeedback = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/feedback/new", {
              method: "POST",
              body: JSON.stringify({
                feedback: post.feedback,
                userId: session?.user.id,
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

    }

  return (
    <Form
        type= "Write"
        post={post}
        setPost= {setPost}
        submitting={submitting}
        handleSubmit={writeFeedback}
    />
  )
}

export default WriteFeedback
