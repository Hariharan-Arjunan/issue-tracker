"use client";
import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validation";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  // Learn about Controller

  return (
    <div>
      {error && (
        <Callout.Root className="max-w-xl">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form
        onSubmit={handleSubmit(async (data) => {
          setError("");
          try {
            await axios.post("/api/issues", data);
            router.push("/");
          } catch (error) {
            setError("An unexpected error occured");
          }
        })}
        className=" max-w-xl space-y-3"
      >
        <TextField.Root placeholder="Title" {...register("title")} />
        {errors?.title && (
          <ErrorMessage> {errors?.title?.message}</ErrorMessage>
        )}
        <TextArea placeholder="Description" {...register("description")} />
        {errors?.description && (
          <ErrorMessage> {errors?.description?.message}</ErrorMessage>
        )}
        <Button disabled={isSubmitting} onClick={() => {}}>
          Submit New Issue {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
