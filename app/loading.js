export default function Loading() {
  return (
    <div className="min-h-screen bg-[var(--bg-surface)]">
      {/* Hero Skeleton */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text Skeleton */}
              <div className="space-y-6">
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                <div className="space-y-3">
                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-40 bg-gray-200 rounded-lg animate-pulse"></div>
                  <div className="h-12 w-40 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
              </div>
              {/* Image Skeleton */}
              <div className="h-80 lg:h-96 bg-gray-200 rounded-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className="py-12 lg:py-14 bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <div className="h-8 w-40 bg-gray-200 rounded animate-pulse"></div>
              <div className="mt-2 w-20 h-1 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="card p-6 h-48 bg-white">
                  <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="card p-8 bg-white mb-6">
                  <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card p-8 bg-white h-40">
                    <div className="h-6 w-28 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="card p-8 bg-white h-40">
                    <div className="h-6 w-28 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Skeleton */}
      <section className="py-12 lg:py-14 bg-white">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
              <div className="mt-2 w-20 h-1 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="card p-6 bg-white">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl animate-pulse mb-4"></div>
                  <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

