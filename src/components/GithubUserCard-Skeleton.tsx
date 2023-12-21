import GithubUser from "@/lib/types/GithubUser";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export default function GithubUserCardSkeleton() {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-5 p-5 animate-pulse border-[2px] rounded-lg w-full">
        <div className="w-fit">
          <Skeleton className="h-16 w-16 rounded-full" />
        </div>
        <div className="w-full">
          <Skeleton className="h-6 w-full mb-5" />
          <Skeleton className="h-9 w-28" />
        </div>
      </div>
    </>
  )
}