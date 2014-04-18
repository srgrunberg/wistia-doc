# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'coffeescript', input: '_assets/js'

# This will concatenate the javascript files specified in :files to js/app.js
guard :concat, type: "js", files: %w(jquery.min post_content_nav search search_text devhq toplink image_layout jquery.nav jquery.scrollTo), input_dir: "_assets/js", output: "app"

guard :concat, type: "css", files: %w(screen), input_dir: "_assets/css", output: "app"


# Guard::Compass
#
# You don't need to configure watchers for guard 'compass' declaration as they generated
# from your Compass configuration file. You might need to define the Compass working directory
# and point to the configuration file depending of your project structure.
#
# Available options:
#
# * working_directory: Define the Compass working directory, relative to the Guardfile directory
# * configuration_file: Path to the Compass configuration file, relative to :project_path
#
# Like usual, the Compass configuration path are relative to the :project_path

# guard 'compass', project_path: 'not_current_dir', configuration_file: 'path/to/my/compass_config.rb'
guard :compass

# Sample guardfile block for Guard::Haml
# You can use some options to change guard-haml configuration
# output: 'public'                   set output directory for compiled files
# input: 'src'                       set input directory with haml files
# run_at_start: true                 compile files when guard starts
# notifications: true                send notifictions to Growl/libnotify/Notifu
# haml_options: { ugly: true }    pass options to the Haml engine

guard :haml, input: '_layouts/haml', output: '_layouts' do
  watch(/^.+(\.html\.haml)$/)
end

guard :haml, input: '_includes/haml', output: '_includes' do
  watch(/^.+(\.html\.haml)$/)
end

guard :haml, input: '_static_pages', output: './' do
  watch(/^.+(\.html\.haml)$/)
end
