export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-container mx-auto px-4 md:px-8 text-center">
        <p className="text-secondary">
          © {new Date().getFullYear()} かめめ. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
