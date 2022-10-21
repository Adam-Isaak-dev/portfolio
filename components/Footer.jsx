import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons";

export default function Footer() {
  return (
    <footer class="bg-gradient-to-b from-neutral-900 to-gray-900 ">
      <div className="flex flex-col justify-center align-center text-neutral-600 text-center py-5">
        <div className="mb-3">
          <span>Built by Adam Isaak</span>
        </div>
        <div className="flex justify-center align-center space-x-3">
          <a href="https://github.com/Adam-Isaak-dev/" target="_blank">
            <IconBrandGithub className="h-6 w-6"/>
          </a>
          <a href="https://www.linkedin.com/in/adam-isaak-dev/" target="_blank">
            <IconBrandLinkedin className="h-6 w-6"/>
          </a>
          <a href="mailto:adam.isaak.dev@gmail.com">
            <IconMail className="h-6 w-6"/>
          </a>
        </div>
      </div>
    </footer>
  );
}