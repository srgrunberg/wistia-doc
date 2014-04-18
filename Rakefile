require 'rspec/core/rake_task'
require 'date'

desc "Get Wistia Global Header / Footer"
task :fetch do
  print "  Getting the Official Wistia Header/Footer ... "
  system %{
    wget -q -O _includes/header.html http://wistia.com/common/header;
    wget -q -O _includes/footer.html http://wistia.com/common/footer
  }
  puts "done."
end

desc "Launch preview environment"
task :preview do
  system "foreman start"
end

# note: this is only for production, be careful it will erase your shit
desc "Auto-update the doc. DONT DO THIS LOCALLY!!!!!!"
task :nuclear_update => [:update_from_git, :build]

desc "Updates from origin/master. DONT DO THIS LOCALLY!!!!!"
task :update_from_git do
  `git fetch && git reset --hard origin/master`
end

# add a title to a post like np title="Blah this is my title"
desc "Create a new post"
task :np do

  title = ENV["title"] || "new-post"
  slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

  puts "creating a new post, entitled #{title}"

  path = "_posts/#{ slug }.md"

  if File.exist?(path)
  	puts "[WARN] File exists - skipping create"
  else
    File.open(path, "w") do |post|
      post.puts "---"
      post.puts "layout: post"
      post.puts "title: \"#{ title.gsub(/-/, ' ')}\""
      post.puts "description: "
      post.puts "category: "
      post.puts "---"
    end
  end

  system "mvim #{path}"

  exit 1

end
