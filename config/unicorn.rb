listen 5001 # by default Unicorn listens on port 8080
worker_processes 2 # this should be >= nr_cpus
pid "/apps/graphiti/shared/pids/unicorn.pid"
stderr_path "/apps/graphiti/shared/log/unicorn.log"
stdout_path "/apps/graphiti/shared/log/unicorn.log"
